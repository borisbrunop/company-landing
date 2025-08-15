import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Card = ({ className, style = {}, children }) => {
  const { themeStyles } = useTheme();
  return (
    <div
      className={`px-4 py-8 md:p-8 rounded-lg border border-solid h-full ${themeStyles.border} ${className}`}
      style={{
        boxShadow: '0 10px 28px rgba(0,0,0,.28)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
