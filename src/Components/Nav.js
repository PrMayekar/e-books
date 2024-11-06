import React from "react";
import "./nav.style.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
import app from "../firebase/firebase";
import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
  const user = useContext(UserContext);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showLoginAndSignUp = (
    <div>
      <ul className="links">
        <li className="sign">
          <Link to="/signup">Sign-up</Link>
        </li>
        <li className="login">
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/books">Books</Link> {/* Updated link to books page */}
        </li>
      </ul>
    </div>
  );

  const showLogoutAndCart = (
    <div>
      <ul className="links">
        <li className="cart">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="logout">
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </li>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/books">Books</Link> {/* Updated link to books page */}
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <header>
        <div className="logo">
          <p>BOOK BARN</p>
          {user ? showLogoutAndCart : showLoginAndSignUp}
        </div>
      </header>
    </>
  );
};

export default Nav;
