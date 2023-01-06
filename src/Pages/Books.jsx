import React from 'react';
import  BooksList  from "../Components/BooksList";
// import Navbar from '../Components/Navbar';
import  SideBar  from "../Components/SideBar";
import styles from "../Styles/Books.module.css";

const Books = () => {
  return (
      <div>
          {/* <Navbar /> */}
          <div className={styles["books-filter-container"]}>
              <div className={styles["filter-component"]}>
                  <SideBar/>
              </div>
              <div className={styles["books-list"]}>
                  <BooksList/>
              </div>
          </div>
    </div>
  )
}

export default Books