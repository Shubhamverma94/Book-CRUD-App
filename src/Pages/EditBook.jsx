import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editBook, getBooks } from "../Redux/Books/action";
import styles from "../Styles/EditCss.module.css";

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const books = useSelector((store) => store.bookReducer.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const bookData = books.find((el) => el.id === +id);
    if (bookData) {
      setTitle(bookData.book_name);
      setAuthor(bookData.author);
    }
  }, []);

  const handleEdit = () => {
    let newData = {
      author,
      book_name: title,
    };
    dispatch(editBook(id, newData)).then(() => dispatch(getBooks()));
    alert("updated!!!");
    console.log(author, title);
    navigate(`/books/${id}`);
  };

  return (
    <div className={styles.EditDiv}>
      <h1>Edit Book Id: {id}</h1>
      <div className={styles.EditBox}>
        <label><b>Author:-</b></label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className={styles.EditBox}>
        <label><b>Title:-</b></label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button className={styles.EditBtn} onClick={handleEdit}>Submit</button>
    </div>
  );
};

export default EditBook;
