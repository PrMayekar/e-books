import React from "react";
import Nav from "./Nav";
import AuthForm from "./Authform/AuthForm";
import { Link } from "react-router-dom";
import "./Login.css";
const Signup = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <form action="">
        <div className="wrapper">
          <h1>SignUp</h1>

          <AuthForm btnName="Sign Up" />
        </div>
      </form>
    </>
  );
};
export default Signup;
