import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useTheme } from '../hooks/useTheme';

const AuthDocs = () => {
  const { themeStyles } = useTheme();
  const [loading, setLoading] = useState(true);
  const [docData, setDocData] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      // Check if window is defined (for Gatsby build process)
      if (typeof window === 'undefined') return;

      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');

      if (!token) {
        setLoading(false);
        setIsValid(false);
        setErrorMessage('No token provided.');
        return;
      }

      try {
        // Query Firestore for the document with the specific custom 'id'
        const q = query(collection(db, 'documents'), where('id', '==', token));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Document found
          const doc = querySnapshot.docs[0].data();

          if (doc.status === 'Active') {
            // Check if document is expired
            const currentDate = new Date().toISOString().split('T')[0]; // Get today's date YYYY-MM-DD

            if (doc.dueDate && doc.dueDate < currentDate) {
              setIsValid(false);
              setErrorMessage('This document has been revoked');
            } else {
              setDocData(doc);
              setIsValid(true);
            }
          } else {
            // Document exists but is not active
            setIsValid(false);
            setErrorMessage('This document has been revoked');
          }
        } else {
          // Document not found
          setIsValid(false);
          setErrorMessage(
            'The document you are looking for could not be verified. The token provided is invalid or does not exist in our records.'
          );
        }
      } catch (error) {
        console.error('Error verifying document:', error);
        setIsValid(false);
        setErrorMessage('An error occurred while verifying the document. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  return (
    <Layout>
      <section className="pt-20 pb-20 min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl">
          {loading && (
            <Card className="text-center">
              <h2 className={`text-2xl font-bold ${themeStyles.textSecondary}`}>
                Verifying Document...
              </h2>
              <p className={`mt-4 ${themeStyles.textPrimary}`}>
                Please wait while we check the authenticity of the document.
              </p>
            </Card>
          )}

          {!loading && isValid && docData && (
            <Card className="text-center border-t-8 border-green-500">
              <div className="mb-6">
                <svg
                  className="w-20 h-20 text-green-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h1 className={`text-3xl font-bold mb-2 ${themeStyles.textSecondary}`}>
                Authentic Document
              </h1>
              <p className="text-green-600 font-semibold mb-8">
                This document is valid and registered in our system.
              </p>

              <div className={`text-left bg-opacity-10 p-6 rounded-lg ${themeStyles.background} `}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Document ID</p>
                    <p className="font-mono font-bold text-lg">{docData.id}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Status</p>
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-bold ${
                        docData.status === 'Active'
                          ? 'bg-green-200 text-green-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {docData.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Document Type</p>
                    <p className="font-semibold">{docData.type}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">Date Issued</p>
                    <p className="font-semibold">{docData.date}</p>
                  </div>
                  {docData.dueDate && (
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-70">Valid Until</p>
                      <p className="font-semibold text-red-500">{docData.dueDate}</p>
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-wider opacity-70">
                      Client / Beneficiary
                    </p>
                    <p className="font-semibold text-xl">{docData.client}</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {!loading && !isValid && (
            <Card className="text-center border-t-8 border-red-500">
              <div className="mb-6">
                <svg
                  className="w-20 h-20 text-red-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h1 className={`text-3xl font-bold mb-4 ${themeStyles.textSecondary}`}>
                Document Invalid
              </h1>
              <p className={`mb-8 ${themeStyles.textPrimary}`}>{errorMessage}</p>
            </Card>
          )}

          <div className="mt-12 text-center">
            <Link to="/">
              <Button size="lg">Go to IPGC Home</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuthDocs;
