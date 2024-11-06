import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardBook from "./CardBook"; // Changed from Card to CardBook
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import "./BooksPage.css";

const BooksPage = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const resultsPerPage = 40;

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const query = category ? category : "new books";
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${resultsPerPage}&startIndex=${
            page * resultsPerPage
          }`
        );
        const data = await response.json();
        setBooks(data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
      setLoading(false);
    };

    fetchBooks();
  }, [category, page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Nav />
      <div className="books-page">
        <Sidebar />
        <div className="content">
          <h1>{category ? category : "Popular Books"}</h1>
          <p>{loading ? "Loading..." : `${books.length} results found`}</p>
          <div className="book-grid">
            {loading ? (
              <p>Loading books...</p>
            ) : (
              books.map((book) => <CardBook key={book.id} book={book} />) // Using CardBook here
            )}
          </div>
          <button
            className="next-button"
            onClick={handleNextPage}
            disabled={loading || books.length < resultsPerPage} // Disable if loading or no more results
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
