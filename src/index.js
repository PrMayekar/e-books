import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, route } from "react-router-dom";
import Cart from "./Billing/Cart";
import App from "./App";

// import Login from "./Components/Login";
import Main from "./Components/Main";
import Modal from "./Components/Modal";
import Card from "./Components/Card";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//   },
//   {
//     path: "/books",
//     element: <Main />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
// ]);
// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Routes, route } from "react-router-dom";
// import Cart from "./Billing/Cart";
// import App from "./App";

// // import Login from "./Components/Login";
// import Main from "./Components/Main";
// import Modal from "./Components/Modal";
// import Card from "./Components/Card";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
// import './index.css'

// const root = ReactDOM.createRoot(document.getElementById("app"));
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
