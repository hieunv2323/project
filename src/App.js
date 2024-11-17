import React, { useState } from "react";
import AddOrderForm from "./AddOrderForm";
import OrderList from "./OrderList";
import PrintOrder from "./PrintOrder";

function App() {
  const [orders, setOrders] = useState([]);

  // Hàm thêm đơn hàng
  const addOrder = (newOrder) => {
    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  // Hàm xóa đơn hàng
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h1>Quản Lý Đơn Hàng</h1>

      <AddOrderForm addOrder={addOrder} />
      <OrderList orders={orders} deleteOrder={deleteOrder} />
      <PrintOrder orders={orders} />
    </div>
  );
}

export default App;
