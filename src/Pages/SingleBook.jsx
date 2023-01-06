import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BookCard from "../Components/BookCard";
import styles from "../Styles/singleBook.module.css";

const SingleBook = () => {
  const { id } = useParams();
  const books = useSelector((store) => store.bookReducer.books);
  const [book, setBook] = useState({});

  useEffect(() => {
    const bookData = books.find((el) => el.id == +id);
    bookData && setBook(bookData);
  });

  return (
    <div>
      <h1>Single Book {id}</h1>
      <div className={styles.singleBook_css}>
        <BookCard book={book} />
      </div>
    </div>
  );
};

export default SingleBook;
