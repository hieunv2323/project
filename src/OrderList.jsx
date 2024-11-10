import React, { useState } from 'react';
import OrderItem from './OrderItem';
import PrintOrder from './PrintOrder';


const initialOrders = [
  {
    id: 1,
    name: 'Đơn hàng 1',
    customerName: 'Nguyễn Văn Hiếu',
    amount: 300,
    products: [
      { id: 1, name: 'Sản phẩm A', price: 100, quantity: 1 },
      { id: 2, name: 'Sản phẩm B', price: 200, quantity: 1 },
    ],
  },
  {
    id: 2,
    name: 'Đơn hàng 2',
    customerName: 'Nguyễn Văn Tuyệt',
    amount: 450,
    products: [
      { id: 3, name: 'Sản phẩm C', price: 150, quantity: 2 },
      { id: 4, name: 'Sản phẩm D', price: 150, quantity: 1 },
    ],
  },
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