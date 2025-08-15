import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='w-full bg-background-lighter'>
      <Header />
      <main className="text-gray-900 bg-background-lighter">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
