import React from 'react';

const OrderList = ({ orders }) => {
  return (
  <div>
    <div className="order-list">
      <h2>Danh Sách Đơn Hàng</h2>
        <ul>
         {orders.map(order => (
            <li key={order.id} className="order-item">
              <h3>{order.name}</h3>
              <p>Tên khách hàng: {order.customerName}</p> 
              <h4>Danh sách sản phẩm:</h4>
              <ul className="product-list">
                {order.products.map(product => (
                  <li key={product.id}>
                    {product.name} - Giá: {product.price} VNĐ - Số lượng: {product.quantity}
                  </li>
                ))}
                <p className = "total-amount" >Tổng số tiền: {order.amount} VNĐ</p>
              </ul>
            </li>
    ))}
  </ul> 
</div>
<div className = "center">
<button className="print-order-button">In đơn hàng</button>
</div>
</div>

  );
};

export default OrderList;
