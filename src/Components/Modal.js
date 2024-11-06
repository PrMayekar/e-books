import React, { useContext } from "react";
import { UserContext, CartContext } from "../App";
import { useNavigate } from "react-router-dom";

const Modal = ({ show, item, onClose }) => {
  if (!show) return null;

  const { cartItems, setCartItems } = useContext(CartContext);
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const thumbnail = item.volumeInfo.imageLinks?.thumbnail || "placeholder.jpg";
  const amount = item.saleInfo?.listPrice?.amount || "N/A";

  const handleCart = () => {
    if (user) {
      setCartItems([...cartItems, item]);
      alert(`${item.volumeInfo.title} added to cart`);
    } else {
      alert("Please log in to add items to the cart");
      navigate("/login");
    }
  };

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <div className="modal-content">
          <img src={thumbnail} alt="Book" />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <p>{item.volumeInfo.authors?.join(", ")}</p>
            <p>Pages: {item.volumeInfo.pageCount}</p>
            <p>Published: {item.volumeInfo.publishedDate}</p>
            <p>{item.volumeInfo.description}</p>
            <h3>₹{amount}</h3>
          </div>
        </div>
        <button className="cart-btn" onClick={handleCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Modal;
