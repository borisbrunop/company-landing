import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import Card from '../Card';
import Button from '../Button';
import { useTheme } from '../../hooks/useTheme';

const DocumentsData = ({ setIsCreating }) => {
  const { themeStyles, theme } = useTheme();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define QR colors based on theme for DISPLAY only
  const qrFgColor = theme === 'dark' ? '#F6EEDD' : '#2E3B38';
  const qrBgColor = theme === 'dark' ? '#2E3B38' : '#F6EEDD';

  useEffect(() => {
    const q = query(collection(db, 'documents'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const docsData = snapshot.docs.map((doc) => ({
          firestoreId: doc.id,
          ...doc.data(),
        }));
        setDocuments(docsData);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching documents:', error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    if (
      window.confirm('Are you sure you want to delete this document? This action cannot be undone.')
    ) {
      try {
        await deleteDoc(doc(db, 'documents', id));
      } catch (error) {
        console.error('Error deleting document: ', error);
        alert('Error deleting document');
      }
    }
  };

  const handleStatusChange = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
    try {
      await updateDoc(doc(db, 'documents', id), { status: newStatus });
    } catch (error) {
      console.error('Error updating status: ', error);
      alert('Error updating status');
    }
  };

  // Function to download QR Code
  const downloadQRCode = (docId) => {
    const svg = document.getElementById(`qr-code-${docId}`);
    if (!svg) return;

    // Clone the SVG to modify colors for download
    const clonedSvg = svg.cloneNode(true);

    // 1. Set explicit dimensions for the SVG so canvas draws it correctly
    clonedSvg.setAttribute('width', '256');
    clonedSvg.setAttribute('height', '256');

    // 2. Force white background on the SVG container style
    clonedSvg.style.backgroundColor = '#FFFFFF';

    // 3. Smartly swap colors:
    // If a path matches the current theme's BG color -> Make it WHITE
    // If a path matches the current theme's FG color -> Make it BLACK
    const elements = clonedSvg.querySelectorAll('path, rect');

    for (let el of elements) {
      const currentFill = el.getAttribute('fill');

      if (currentFill && currentFill.toLowerCase() === qrBgColor.toLowerCase()) {
        // This is the background element
        el.setAttribute('fill', '#FFFFFF');
      } else {
        // This is the foreground element (the QR dots)
        el.setAttribute('fill', '#000000');
      }
    }

    const svgData = new XMLSerializer().serializeToString(clonedSvg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    // Add a small margin for the image
    const size = 256;
    canvas.width = size;
    canvas.height = size;

    img.onload = () => {
      // Draw white background first
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, size, size);

      // Draw SVG on top
      ctx.drawImage(img, 0, 0, size, size);

      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = `QR-${docId}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    // Use btoa with unescape/encodeURIComponent to handle any potential unicode issues safely
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <section className="pt-10 pb-20">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className={`text-3xl font-bold ${themeStyles.textSecondary}`}>Admin Panel</h1>
          <div className="flex gap-4">
            <Button size="sm" onClick={() => setIsCreating(true)}>
              Create New Document
            </Button>
          </div>
        </div>

        {loading ? (
          <div className={`text-center ${themeStyles.textPrimary}`}>Loading documents...</div>
        ) : (
          <div className="grid gap-6">
            {documents.length === 0 && (
              <p className={`text-center ${themeStyles.textPrimary}`}>No documents found.</p>
            )}

            {documents.map((doc) => (
              <Card
                key={doc.firestoreId}
                className="flex flex-col md:flex-row justify-between items-center gap-4"
              >
                <div className="mb-4 md:mb-0 flex-1">
                  <p className={`font-bold text-xl ${themeStyles.textSecondary}`}>
                    {doc.type} - {doc.id}
                  </p>
                  <p className={`text-sm ${themeStyles.textPrimary}`}>
                    Client: {doc.client || 'N/A'}
                    <br />
                    Date: {doc.date}
                    <br />
                    Due Date: {doc.dueDate || 'N/A'}
                  </p>
                  <div className="mt-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        doc.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      onClick={() => handleStatusChange(doc.firestoreId, doc.status)}
                      className={`px-4 py-2 rounded text-sm font-medium transition-colors border ${
                        doc.status === 'Active'
                          ? 'border-yellow-600 text-yellow-600 hover:bg-yellow-50'
                          : 'border-green-600 text-green-600 hover:bg-green-50'
                      }`}
                    >
                      {doc.status === 'Active' ? 'Set Inactive' : 'Set Active'}
                    </button>

                    <button
                      onClick={() => handleDelete(doc.firestoreId)}
                      className="px-4 py-2 rounded text-sm font-medium border border-red-600 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {/* QR Code Section */}
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded" style={{ backgroundColor: qrBgColor }}>
                    <QRCode
                      id={`qr-code-${doc.id}`} // Unique ID for selection
                      value={`https://www.interpgc.com/auth-docs?token=${doc.id}`}
                      size={100}
                      level="L"
                      fgColor={qrFgColor}
                      bgColor={qrBgColor}
                    />
                  </div>
                  <button
                    onClick={() => downloadQRCode(doc.id)}
                    className={`text-xs underline ${themeStyles.textPrimary} hover:text-secondary`}
                  >
                    Download QR
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DocumentsData;
