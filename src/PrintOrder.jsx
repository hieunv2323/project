import React, { useRef } from "react";
import "./index.css";

const PrintOrder = ({ orders }) => {
  const componentRef = useRef();

  const handlePrint = () => {
    const printContent = componentRef.current.innerHTML;
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>In Đơn Hàng</title>
          <link rel="stylesheet" type="text/css" href="index.css" />
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div>
      <div className="center">
        <button className="print-order-button" onClick={handlePrint}>
          In Đơn Hàng
        </button>
      </div>
      <div style={{ display: "none" }}>
        <div ref={componentRef} className="order-details">
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
