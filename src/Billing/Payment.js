import React, { useContext } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav";
import "./Payment.css";

const Payment = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const listPrice = item.saleInfo ? item.saleInfo.listPrice : {};
    return total + (listPrice.amount || 0);
  }, 0);

  const handleRazorpayPayment = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
        amount: totalPrice * 100, // Amount in paise (₹1 = 100 paise)
        currency: "INR",
        name: "Your Store Name",
        description: "Order Payment",
        image: "https://your-logo-url.com/logo.png", // Replace with your logo URL
        handler: (response) => {
          alert(
            "Payment successful! Transaction ID: " +
              response.razorpay_payment_id
          );
          navigate("/thank-you");
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#ff8c00",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
  };

  return (
    <>
      <Nav />
      <div className="payment-page">
        <div className="payment-container">
          <h2>Complete Your Payment</h2>

          <div className="payment-summary">
            <h3>Order Summary</h3>
            {cartItems.map((item, index) => (
              <p key={index}>
                {item.volumeInfo.title}: ₹{item.saleInfo.listPrice.amount}
              </p>
            ))}
            <p className="total">Total: ₹{totalPrice}</p>
          </div>

          <button className="razorpay-btn" onClick={handleRazorpayPayment}>
            Pay with Razorpay
          </button>

          <button
            className="back-to-cart-btn"
            onClick={() => navigate("/cart")}
          >
            <i className="fa-solid fa-chevron-left"></i> Back to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Payment;
