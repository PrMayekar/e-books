// import React from "react";
// import "./CartItemsCard.styles.css";

// const CartItemsCard = ({ item, onRemove }) => {
//   const volumeInfo = item.volumeInfo || {};
//   const title = volumeInfo.title || "Untitled";
//   const authors = volumeInfo.authors
//     ? volumeInfo.authors.join(", ")
//     : "Unknown Author";
//   const listPrice = item.saleInfo ? item.saleInfo.listPrice : {};
//   const price = listPrice.amount
//     ? `₹${listPrice.amount}`
//     : "Price not available";
//   const imageLinks = volumeInfo.imageLinks || {};
//   const image = imageLinks.smallThumbnail || "default-image-url"; // Replace with a valid default image URL

//   // Handle item removal
//   const handleRemove = () => {
//     if (onRemove) {
//       onRemove(item); // Pass the item to the onRemove function
//     }
//   };

//   return (
//     <section className="cart-container">
//       <div className="cart-img-container">
//         <img src={image} alt={title} />
//       </div>
//       <div className="cart-items">
//         <h2>{title}</h2>
//         <p>{authors}</p>
//         <h3 className="cart-item-price">{price}</h3>
//         <div className="remove-btn">
//           <button onClick={handleRemove}>Remove</button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CartItemsCard;
import React from "react";
import "./CartItemsCard.styles.css";

const CartItemsCard = ({ item, onRemove }) => {
  const volumeInfo = item.volumeInfo || {};
  const title = volumeInfo.title || "Untitled";
  const authors = volumeInfo.authors
    ? volumeInfo.authors.join(", ")
    : "Unknown Author";
  const listPrice = item.saleInfo ? item.saleInfo.listPrice : {};
  const price = listPrice.amount
    ? `₹${listPrice.amount}`
    : "Price not available";
  const imageLinks = volumeInfo.imageLinks || {};
  const image = imageLinks.smallThumbnail || "default-image-url"; // Replace with a valid default image URL

  // Handle item removal
  const handleRemove = () => {
    if (onRemove) {
      onRemove(item); // Pass the item to the onRemove function
    }
  };

  return (
    <section className="cart-container">
      <div className="cart-img-container">
        <img src={image} alt={title} />
      </div>
      <div className="cart-items">
        <h2>{title}</h2>
        <p>{authors}</p>
        <h3 className="cart-item-price">{price}</h3>
        <div className="remove-btn">
          <button onClick={handleRemove}>Remove</button>
        </div>
      </div>
    </section>
  );
};

export default CartItemsCard;
