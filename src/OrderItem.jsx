import React from 'react';

const OrderItem = ({ order }) => {
  return (
    <li>
      <h3>{order.name}</h3>
      <p>Tên khách hàng: {order.customerName}</p>
      <p>Tổng số tiền: {order.amount} VNĐ</p>
      <h4>Danh sách sản phẩm:</h4>
      <ul>
        {order.products.map((product) => (
          <li key={product.id}>
            {product.name} - Giá: {product.price} VNĐ - Số lượng: {product.quantity}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default OrderItem;
