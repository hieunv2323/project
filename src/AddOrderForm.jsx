import React, { useState, useRef } from "react";
import Modal from "./Modal";

const AddOrderForm = ({ addOrder }) => {
  const [name, setName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    quantity: 0,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const modalRef = useRef();

  const addProduct = (e) => {
    e.preventDefault();
    const { name, price, quantity } = product;

    if (!name || price <= 0 || quantity <= 0) {
      setErrorMessage("Vui lòng nhập thông tin sản phẩm hợp lệ.");
      modalRef.current.open();
      return;
    }

    const newProduct = {
      id: Date.now(),
      ...product,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
    };

    setProducts([...products, newProduct]);
    setProduct({ name: "", price: 0, quantity: 0 });
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !customerName || products.length === 0) {
      setErrorMessage("Vui lòng thêm thông tin sản phẩm.");
      modalRef.current.open();
      return;
    }

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
    setProducts([]);
    setErrorMessage("");
  };

  return (
    <form id="user-input" onSubmit={handleSubmit}>
      <Modal ref={modalRef} buttonCaption="Đóng">
        <h2 className="center">Thông báo lỗi</h2>
        <p>{errorMessage}</p>
      </Modal>

      <h3>Thêm Đơn Hàng</h3>
      <label className="order-label">Mã đơn hàng</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className="order-label">Tên khách hàng</label>
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        required
      />
      <h4>Thêm Sản Phẩm</h4>
      <label className="order-label">Tên sản phẩm</label>
      <input
        type="text"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <label className="order-label">Giá sản phẩm (VND)</label>
      <input
        type="number"
        value={product.price}
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <label className="order-label">Số lượng</label>
      <input
        type="number"
        value={product.quantity}
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
      />
      <div className="button-container">
        <button className="buttonmini" type="button" onClick={addProduct}>
          Thêm Sản Phẩm
        </button>
      </div>

      <h4>Danh Sách Sản Phẩm</h4>
      {products.length === 0 ? (
        <p>Chưa có sản phẩm nào được thêm.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price.toLocaleString()} VND x{" "}
              {product.quantity}
            </li>
          ))}
        </ul>
      )}

      <div className="button-container">
        <button className="button" type="submit">
          Thêm Đơn Hàng
        </button>
      </div>
    </form>
  );
};

export default AddOrderForm;
