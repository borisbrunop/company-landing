import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/Button';
import documentsData from '../data/documents.json';
import Login from '../components/admin/Login';
import DocumentsData from '../components/admin/DocumentsData';
import DocumentsForm from '../components/admin/DocumentsForm';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // State to manage the list of documents (initialized with the JSON data)
  const [documents, setDocuments] = useState(documentsData);

  // State for the creation form
  const [isCreating, setIsCreating] = useState(false);

  return (
    <Layout>
      {!isAuthenticated && <Login setIsAuthenticated={setIsAuthenticated} />}
      {isAuthenticated && (
        <div className="w-full flex justify-end p-2">
          <Button size="sm" onClick={() => setIsAuthenticated(false)}>
            Logout
          </Button>
        </div>
      )}
      {isAuthenticated && !isCreating && (
        <DocumentsData documents={documents} setIsCreating={setIsCreating} />
      )}
      {isAuthenticated && isCreating && (
        <DocumentsForm
          setDocuments={setDocuments}
          documents={documents}
          setIsCreating={setIsCreating}
        />
      )}
    </Layout>
  );
};

export default Admin;
