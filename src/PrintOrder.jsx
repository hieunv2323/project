import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintOrder = ({ orders }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <button onClick={handlePrint}>In Đơn Hàng</button>
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          <h2>Đơn Hàng</h2>
          <ul>
            {orders.map(order => (
              <li key={order.id}>
                {order.name} - Số tiền: {order.amount} VNĐ
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrintOrder;