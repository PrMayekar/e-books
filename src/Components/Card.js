import React, { useState } from "react";
import Modal from "./Modal";
import { UserContext } from "../App";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  const handleCart = () => {
    console.log("works");
  };

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo?.listPrice?.amount;

        // If thumbnail or amount is undefined, return null
        if (!thumbnail || amount === undefined) {
          return null;
        }

        return (
          <div
            className="card"
            key={item.id} // Assuming each book has a unique ID
            onClick={() => {
              setShow(true);
              setItem(item);
            }}
          >
            <img src={thumbnail} alt={item.volumeInfo.title} />
            <div className="bottom">
              <h3 className="title">{item.volumeInfo.title}</h3>
              <p className="amount"> ₹{amount.toFixed(2)}</p>
              <button onClick={handleCart} className="cart-btn">
                Add to Cart
              </button>
            </div>
            {show && (
              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            )}
            {/* <Modal show={show} item={bookItem} onClose={() => setShow(false)} /> */}
          </div>
        );
      })}
    </>
  );
};

export default Card;
