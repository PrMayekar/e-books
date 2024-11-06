import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../Signup";
import Login from "../Login";
import app from "../../firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthForm = ({ btnName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(app);

    if (btnName === "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          userCredentials.user.displayName = username;

          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form id="auth-form" onClick={handleSubmit}>
      <div className="wrapper">
        <div className="input-box">
          <input
            id="username"
            type="text"
            placeholder="Username"
            required
            value={username}
            autoComplete="off"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            id="email"
            type="email"
            placeholder="email"
            required
            value={email}
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            id="password"
            type="password"
            placeholder="Password(contains 6 characters)"
            required
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">
          {btnName}
        </button>
      </div>
    </form>
  );
};
export default AuthForm;
