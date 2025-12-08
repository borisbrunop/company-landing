import React, { useState } from 'react';
import Card from '../Card';
import Button from '../Button';
import { useTheme } from '../../hooks/useTheme';
import { db } from '../../firebase'; // Import the db instance
import { collection, addDoc } from 'firebase/firestore';

const DocumentsForm = ({ setDocuments, documents, setIsCreating }) => {
  const { themeStyles } = useTheme();
  const [loading, setLoading] = useState(false); // Add loading state
  const [newDoc, setNewDoc] = useState({
    type: '',
    client: '',
    date: new Date().toISOString().split('T')[0],
    dueDate: '', // Initialize dueDate
    status: 'Active',
  });

  const generateId = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoc((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const customId = generateId();

    const documentToAdd = {
      id: customId, // We save your custom ID as a field
      ...newDoc,
    };

    try {
      // 1. Save to Firebase Firestore
      // "documents" is the name of the collection in your database
      await addDoc(collection(db, 'documents'), documentToAdd);

      // 2. Update local state so the UI updates immediately
      setDocuments([documentToAdd, ...documents]);

      // 3. Reset form
      setNewDoc({ type: '', client: '', date: '', dueDate: '', status: 'Active' });
      setIsCreating(false);
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error saving document');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mb-8">
      <Card>
        <h3 className={`text-xl font-bold mb-4 ${themeStyles.textSecondary}`}>
          New Document Details
        </h3>
        <form onSubmit={handleCreateSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={`block text-sm mb-1 ${themeStyles.textPrimary}`}>Type</label>
            <input
              required
              name="type"
              value={newDoc.type}
              onChange={handleInputChange}
              placeholder="e.g. Certificado de Garantía"
              className={`w-full p-2 rounded border ${themeStyles.text} bg-transparent`}
              style={{ borderColor: 'currentColor' }}
            />
          </div>
          <div>
            <label className={`block text-sm mb-1 ${themeStyles.textPrimary}`}>Client Name</label>
            <input
              required
              name="client"
              value={newDoc.client}
              onChange={handleInputChange}
              placeholder="e.g. Juan Pérez"
              className={`w-full p-2 rounded border ${themeStyles.text} bg-transparent`}
              style={{ borderColor: 'currentColor' }}
            />
          </div>
          <div>
            <label className={`block text-sm mb-1 ${themeStyles.textPrimary}`}>Date Issued</label>
            <input
              required
              type="date"
              name="date"
              value={newDoc.date}
              onChange={handleInputChange}
              className={`w-full p-2 rounded border ${themeStyles.text} bg-transparent`}
              style={{ borderColor: 'currentColor' }}
            />
          </div>
          <div>
            <label className={`block text-sm mb-1 ${themeStyles.textPrimary}`}>Due Date</label>
            <input
              required
              type="date"
              name="dueDate"
              min={new Date().toISOString().split('T')[0]}
              value={newDoc.dueDate}
              onChange={handleInputChange}
              className={`w-full p-2 rounded border ${themeStyles.text} bg-transparent`}
              style={{ borderColor: 'currentColor' }}
            />
          </div>
          <div>
            <label className={`block text-sm mb-1 ${themeStyles.textPrimary}`}>Status</label>
            <select
              name="status"
              value={newDoc.status}
              onChange={handleInputChange}
              className={`w-full p-2 rounded border ${themeStyles.text} bg-transparent`}
              style={{ borderColor: 'currentColor' }}
            >
              <option value="Active" className="text-black">
                Active
              </option>
              <option value="Inactive" className="text-black">
                Inactive
              </option>
            </select>
          </div>
          <div className="md:col-span-2 mt-2">
            <Button size="default" type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save Document'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default DocumentsForm;
