import React, { useContext } from "react";
import CartItemsContainer from "./CartItemsContainer";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom"; // Import for navigation

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);
  const navigate = useNavigate(); // Initialize navigate

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const listPrice = item.saleInfo ? item.saleInfo.listPrice : {};
    return total + (listPrice.amount || 0);
  }, 0);

  // Handle the Proceed to Payment action
  const proceedToPayment = () => {
    if (cartItems.length > 0) {
      // Navigate to the payment page
      navigate("/payment");
    } else {
      alert(
        "Your cart is empty. Please add some items before proceeding to payment."
      );
    }
  };

  return (
    <div className="cartB">
      <CartItemsContainer cartItems={cartItems} onRemove={removeItem} />
      <div className="total-price">
        <h2>Total Bill: ₹{totalPrice.toFixed(2)}</h2>
      </div>
      {/* Proceed to Payment Button */}
      <div className="payment-section">
        <button className="proceed-to-payment" onClick={proceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
