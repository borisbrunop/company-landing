import React from 'react';
import Card from './Card';

const CustomerCard = ({ customer }) => (
  <Card className="mb-8 p-20" style={{ width: 'fit-content' }}>
    <div className="flex w-full justify-center">
      <img
        className="w-40 h-40 mr-4 rounded-full object-cover "
        src={customer.customerImage}
        alt={customer.customerName}
      />
    </div>
    <p className="text-xl font-semibold">{customer.title}</p>
    <p>{customer.content}</p>
    <p className="text-sm text-gray-600">{customer.customerTitle}</p>
    {/* <div className="flex items-center mt-8">
      <div>
      </div>
    </div> */}
  </Card>
);

export default CustomerCard;
