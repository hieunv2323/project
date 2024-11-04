import React, { useState } from 'react';
import OrderItem from './OrderItem';
import PrintOrder from './PrintOrder';

const initialOrders = [
  { id: 1, name: 'Đơn hàng 1', amount: 100 },
  { id: 2, name: 'Đơn hàng 2', amount: 200 },
];

const OrderList = () => {
  const [orders] = useState(initialOrders);

  return (
    <div>
      <h2>Danh Sách Đơn Hàng</h2>
      <ul>
        {orders.map(order => (
          <OrderItem key={order.id} order={order} />
        ))}
      </ul>
      <PrintOrder orders={orders} />
    </div>
  );
};

export default OrderList;