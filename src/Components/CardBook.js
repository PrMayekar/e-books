import React, { useState } from "react";
import Modal from "./Modal";

const CardBook = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  // Safely access properties of the book object
  const thumbnail =
    book.volumeInfo && book.volumeInfo.imageLinks
      ? book.volumeInfo.imageLinks.thumbnail
      : "placeholder.jpg"; // Fallback if thumbnail is not available
  const title = book.volumeInfo ? book.volumeInfo.title : "No Title Available"; // Fallback for title
  const price =
    book.saleInfo && book.saleInfo.listPrice
      ? book.saleInfo.listPrice.amount.toFixed(2) // Show price to two decimal places
      : "N/A"; // Fallback for price

  return (
    <>
      <div
        className="cardbook"
        onClick={() => {
          setShow(true);
          setItem(book);
        }}
      >
        <img src={thumbnail} alt="Book Thumbnail" />
        <div className="bottom">
          <h3>{title}</h3>
          <p>₹{price}</p>
        </div>
      </div>
      {show && (
        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
      )}
    </>
  );
};

export default CardBook;
