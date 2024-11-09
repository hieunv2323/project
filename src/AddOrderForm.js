import React, { useState } from 'react';

const AddOrderForm = ({ addOrder }) => {
  const [name, setName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState(0);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  // Hàm thêm sản phẩm vào danh sách tạm
  const addProduct = (e) => {
    e.preventDefault();
    if (!productName || productPrice <= 0 || productQuantity <= 0) return;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(productPrice),
      quantity: parseInt(productQuantity, 10),
    };

    setProducts([...products, newProduct]);
    setProductName('');
    setProductPrice(0);
    setProductQuantity(1);
  };

  // Hàm xử lý gửi form
  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: Date.now(),
      name,
      customerName,
      amount: parseFloat(amount),
      products, // Thêm danh sách sản phẩm vào đơn hàng
    };

    addOrder(newOrder); // Gửi đơn hàng mới về App.js

    // Reset form
    setName('');
    setCustomerName('');
    setAmount(0);
    setProducts([]);
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      <h3>Thêm Đơn Hàng</h3>
      <input
        type="text"
        placeholder="Tên đơn hàng"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tên khách hàng"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Tổng số tiền"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <h4>Thêm Sản Phẩm</h4>
      <input
        type="text"
        placeholder="Tên sản phẩm"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá sản phẩm"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Số lượng"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      />
      <button class = "buttonmini"type="button" onClick={addProduct}>
        Thêm Sản Phẩm
      </button>
      <ul>
        {products.map(product => {
          return <li key={product.id}>
            {product.name} - {product.price} VND x {product.quantity}
          </li>
        })}
      </ul>

      <button class = "button" type="submit">Thêm Đơn Hàng</button>
    </form>
  );
};

export default AddOrderForm;
