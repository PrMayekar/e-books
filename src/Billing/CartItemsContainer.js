import React from "react";
import Nav from "../Components/Nav";
import CartItemsCard from "../Components/Cards/CartItemsCard";

const CartItemsContainer = ({ cartItems, onRemove }) => {
  return (
    <>
      <section>
        <Nav />
      </section>

      <section className="cart-layout">
        <h2 className="cart">Cart</h2>
        {cartItems.map((item, index) => (
          <CartItemsCard key={index} item={item} onRemove={onRemove} />
        ))}
      </section>
    </>
  );
};

export default CartItemsContainer;
