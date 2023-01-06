import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/Authentication/action";
import styles from "../Styles/LoginCss.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("login-Page", location);

  const loginHandler = () => {
    let userData = { email, password };
    dispatch(login(userData)).then(() => {
      navigate(location.state,{replace:true});
    });
  };

  return (
    <div className={styles.outterDivlogin}>
      <h1>Login</h1>
      <div className={styles.loginBtn}>
        <label><b>Email:-</b></label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.loginBtn}>
        <label><b>Password:-</b></label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.loginSubmit} onClick={loginHandler}>Log in</button>
    </div>
  );
};

export default Login;
