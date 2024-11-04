import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <li>
      {order.name} - Số tiền: {order.amount} VNĐ
    </li>
  );
};

export default OrderItem;