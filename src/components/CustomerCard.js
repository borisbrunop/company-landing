import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8 p-20 flex justify-center flex-col" style={{ width: 'fit-content' }}>
    <p className="text-xl font-semibold text-center text-secondary">{customer.title}</p>
    <p className="text-center text-secondary">{customer.content}</p>
    <p className="text-sm text-secondary text-center" style={{ opacity: 0.65 }}>{customer.customerTitle}</p>
  </Card>
);

export default CustomerCard;
  