import React, { useState } from 'react';
import OrderList from './OrderList';
import AddOrderForm from './AddOrderForm';

function App () {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: '',
      customerName: '',
      amount: 300,
      products: [
        { id: 1, name: '', price: 100, quantity: 1 },
        { id: 2, name: '', price: 200, quantity: 1 },
      ],
    },
  ]);

 // Hàm thêm đơn hàng vào danh sách
 const addOrder = (inputIdentifier, newOrder) => {
  setOrders(prevOrders => {
    return{
    ...prevOrders,
    [inputIdentifier]: +newOrder
    }
  })
};

  return (
    <div>
      <h1>Quản Lý Đơn Hàng</h1>
      <AddOrderForm addOrder={addOrder} />
      <OrderList orders={orders} />
    </div>
  );
};

export default App;
