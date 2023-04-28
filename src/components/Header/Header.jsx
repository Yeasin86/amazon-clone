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
      <nav className="navMenu">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
        <Link to="/profile">
          {user&& <img className="userIcon" src="https://i.ibb.co/fdwyBxN/User.png" alt="" />}
        </Link>
        
      </nav>
    </div>
  );
};

export default Header;
