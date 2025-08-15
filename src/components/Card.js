import React from 'react';

const Card = ({ className, style = {}, children }) => (
  <div
    className={`p-8 rounded-lg border border-solid border-background h-full ${className}`}
    style={{
      boxShadow: '0 10px 28px rgba(0,0,0,.28)',
      ...style,
    }}
  >
    {children}
  </div>
);

export default Card; 
