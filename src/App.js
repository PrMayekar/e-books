import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import app from "./firebase/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import BooksPage from "./Components/BooksPage";
import Main from "./Components/Main";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Cart from "./Billing/Cart";
import Payment from "./Billing/Payment";
import "./styles.css";

export const UserContext = createContext({});
export const CartContext = createContext({});

export default function App() {
  const auth = getAuth(app);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthenticatedUser(user || null);
    });
  }, [auth]);

  const removeItem = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

  return (
    <div className="App">
      <UserContext.Provider value={authenticatedUser}>
        <CartContext.Provider value={{ cartItems, setCartItems, removeItem }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:category" element={<BooksPage />} />{" "}
            {/* Dynamic route for categories */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </CartContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
