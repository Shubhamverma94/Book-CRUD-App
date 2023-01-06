import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <h1>Book Management</h1>

      <Link to={"/"}>
        <button
         className={styles.buttonNavbar}
        >
          Home
        </button>
      </Link>
      <Link to={"/login"}>
        <button className={styles.buttonNavbar}>Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
