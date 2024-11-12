import React, { useState } from "react";

const AddOrderForm = ({ addOrder }) => {
  const [name, setName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [, setAmount] = useState(0);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

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

    setProductName("");
    setProductPrice(0);
    setProductQuantity(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !customerName || products.length === 0) return;

    const totalAmount = products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );

    const newOrder = {
      id: Date.now(),
      name,
      customerName,
      amount: totalAmount,
      products,
    };

    addOrder(newOrder);

    setName("");
    setCustomerName("");
    setAmount(0);
    setProducts([]);
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      <h3>Thêm Đơn Hàng</h3>
      <span className="order-label">Tên đơn hàng</span>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <span className="order-label">Tên khách hàng</span>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />

      <h4>Thêm Sản Phẩm</h4>
      <span className="order-label">Tên sản phẩm</span>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <span className="order-label">Giá sản phẩm (VND)</span>
      <input
        type="number"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <span className="order-label">Số lượng</span>
      <input
        type="number"
        value={productQuantity}
        onChange={(e) => setProductQuantity(e.target.value)}
      />
      <div className="button-container ">
        <button className="buttonmini" type="button" onClick={addProduct}>
          Thêm Sản Phẩm
        </button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} VND x {product.quantity}
          </li>
        ))}
      </ul>
      <div className="button-container ">
        <button className="button" type="submit">
          Thêm Đơn Hàng
        </button>
      </div>
    </form>
  );
};

export default AddOrderForm;
