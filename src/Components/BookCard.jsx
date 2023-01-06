import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
      <div style={{padding:"10px",backgroundColor:"#a891b7",borderRadius:"10%" }}>
      <Link to={`/books/${book.id}`}>
      <img
        src="https://img.freepik.com/premium-vector/heap-books-sketch-library-stack-education-symbol_80590-12797.jpg?w=2000"
        alt="book_cover"
        width="90%"
        style={{ padding: "10px",borderRadius:"20%" }}
        />
        </Link>
      <h3>{book.book_name}</h3>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>Year: {book.release_year}</p>
      <Link to={`/books/${book.id}/edit`}>
      <button className={styles.bookCardButton}>Edit</button>
      </Link>
      </div>
    </div>
  );
};

export default BookCard;
