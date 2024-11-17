import React from "react";

const OrderList = ({ orders, deleteOrder }) => {
  return (
    <div>
      <h2>Danh Sách Đơn Hàng</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <h3>{order.name}</h3>
            <p>Tên khách hàng: {order.customerName}</p>
            <h4>Danh sách sản phẩm:</h4>
            <ul className="product-list">
              {order.products.map((product) => (
                <li key={product.id}>
                  {product.name} - Giá: {product.price.toLocaleString()} VNĐ -
                  Số lượng: {product.quantity}
                </li>
              ))}
            </ul>
            <p className="total-amount">
              Tổng số tiền: {order.amount.toLocaleString()} VNĐ
            </p>

            <button
              className="delete-order-button"
              onClick={() => deleteOrder(order.id)}
            >
              Xóa Đơn Hàng
            </button>
          </li>
        ))}
      </ul>
      {orders.length === 0 && <p>Không có đơn hàng nào.</p>}
    </div>
  );
};

export default OrderList;
