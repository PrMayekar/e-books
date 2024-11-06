import React from "react";
import Nav from "./Nav";
import AuthForm from "./Authform/AuthForm";
import { Link } from "react-router-dom";

import "./Login.css";
const Login = () => {
  return (
    <>
      <div>
        <header>
          <Nav />
        </header>
      </div>

      <form action="">
        <div className="wrapper">
          <h1>Login</h1>
          <AuthForm btnName="Login" />
        </div>
      </form>
    </>
  );
};
export default Login;
