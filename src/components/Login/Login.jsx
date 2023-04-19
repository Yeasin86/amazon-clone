import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleLogOut = (event) => {
    event.preventDefault(); 
    const form = event.target;
    const email = form.email.value; 
    const password = form.password.value; 
    logIn(email, password)
    .then(result => {
        const loggedUser = result.user; 
        console.log(loggedUser);
    })
    .catch(err=> console.log(err.message))
  };
  
  return (
    <form onSubmit={handleLogOut} className="form-container">
      <label htmlFor="">
        <h2 className="form-title">Login</h2>
      </label>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id=""
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="form-control">
        <input
          className="login-btn"
          type="submit"
          name="password"
          id=""
          value="Login"
          required
        />
      </div>
      <div className="redirect-container">
        <small>
          New to Ema-Jhon! <Link to="/signup">Create New Account</Link>
        </small>
      </div>
    </form>
  );
};

export default Login;
