import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./components/Loaders/cartProductsLoader";
import SignUp from "./components/SignUp/SignUp";
import AuthProvider from "./components/providers/AuthProvider";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import CheckOut from "./components/CheckOut/CheckOut";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      { 
        path: "/", 
        element: <Shop></Shop> 
      },

      {
        path: "/checkout", 
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },

      {
        path: "/orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },

      {
        path: "/inventory",
        element: <PrivateRoute><Inventory></Inventory></PrivateRoute>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },

      {
        path: "/profile",
        element: <Profile></Profile>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
