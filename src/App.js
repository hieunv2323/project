import React, { useState } from 'react';
import AddOrderForm from './AddOrderForm';
import OrderList from './OrderList';

function App() {
  const [orders, setOrders] = useState([]);

  // Hàm thêm đơn hàng vào danh sách
  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);  // Cập nhật orders an toàn
  };

  return (
    <div>
      <h1>Quản Lý Đơn Hàng</h1>
      <AddOrderForm addOrder={addOrder} />
      <OrderList orders={orders} />
      
    </div>
  );
}

export default App;
