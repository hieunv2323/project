import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintOrder = ({ orders }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button id ='print' onClick={handlePrint}>In Đơn Hàng</button>
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          <h2>Đơn Hàng</h2>
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
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
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrintOrder;
