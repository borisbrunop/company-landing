import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useTheme } from '../hooks/useTheme';
import { useTranslation } from 'react-i18next';

const AuthDocs = () => {
  const { themeStyles } = useTheme();
  const [loading, setLoading] = useState(true);
  const [docData, setDocData] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

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
              setErrorMessage('auth_docs.text_bad');
            } else {
              setDocData(doc);
              setIsValid(true);
            }
          } else {
            // Document exists but is not active
            setIsValid(false);
            setErrorMessage('auth_docs.text_bad');
          }
        } else {
          // Document not found
          setIsValid(false);
          setErrorMessage('auth_docs.text_not_found');
        }
      } catch (error) {
        console.error('Error verifying document:', error);
        setIsValid(false);
        setErrorMessage('auth_docs.text_error');
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl">
          {loading && (
            <Card className="text-center">
              <h2 className={`text-2xl font-bold ${themeStyles.textSecondary}`}>
                {t('auth_docs.loading')}
              </h2>
              <p className={`mt-4 ${themeStyles.textPrimary}`}>{t('auth_docs.instruction')}</p>
            </Card>
          )}

          {!loading && isValid && docData && (
            <Card className="text-center">
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
                {t('auth_docs.title_ok')}
              </h1>
              <p className="text-green-600 font-semibold mb-8">{t('auth_docs.text_ok')}</p>

              <div className={`text-left bg-opacity-10 p-6 rounded-lg ${themeStyles.background} `}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">
                      {t('auth_docs.document_id')}
                    </p>
                    <p className="font-mono font-bold text-lg">{docData.id}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">
                      {t('auth_docs.status')}
                    </p>
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
                    <p className="text-xs uppercase tracking-wider opacity-70">
                      {t('auth_docs.document_type')}
                    </p>
                    <p className="font-semibold">{docData.type}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70">
                      {t('auth_docs.date_issued')}
                    </p>
                    <p className="font-semibold">{docData.date}</p>
                  </div>
                  {docData.dueDate && (
                    <div>
                      <p className="text-xs uppercase tracking-wider opacity-70">
                        {t('auth_docs.due_date')}
                      </p>
                      <p className="font-semibold text-red-500">{docData.dueDate}</p>
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <p className="text-xs uppercase tracking-wider opacity-70">
                      {t('auth_docs.client')}
                    </p>
                    <p className="font-semibold text-xl">{docData.client}</p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {!loading && !isValid && (
            <Card className="text-center">
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
                {t('auth_docs.title_bad')}
              </h1>
              <p className={`mb-8 ${themeStyles.textPrimary}`}>{t(errorMessage)}</p>
            </Card>
          )}

          <div className="mt-12 text-center">
            <Link to="/">
              <Button size="lg">{t('auth_docs.go_home')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuthDocs;
