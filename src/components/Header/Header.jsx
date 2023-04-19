import React, { useContext } from "react";
import "./Header.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
        {user&& <div>
          <img src="https://thumbs.dreamstime.com/b/person-icon-black-background-person-solid-vector-eps-90447225.jpg" alt="" />
        </div>
        }
      </nav>
    </div>
  );
};

export default Header;
