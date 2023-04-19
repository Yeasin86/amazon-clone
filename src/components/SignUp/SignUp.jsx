import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {

  const [errorMessage, setErrorMessage] = useState(" ")
  const [accountExists, setAccountExists] = useState(" ")
  const {register, setUser} = useContext(AuthContext); 

  
  const handleRegisterUsers = (event) =>{
    event.preventDefault(); 
    const form = event.target; 
    const email = form.email.value;
    const password = form.password.value; 
    const confirmPassword = form.confirmPassword; 
    setErrorMessage(" ")

    if(password !== confirmPassword){
      setErrorMessage("password didn't match")
    }

    register(email, password)
    .then(res => setUser(res.user))
    .catch(err => setAccountExists(err.message))
  }

  return (
    <div>
      <h2 className="title-signup-page">Sign up to Buy the best!</h2>
      <form onSubmit={handleRegisterUsers} className="signUp-form-container">
        <h2 className="form-title">Sign Up</h2>
        <div className="form-control">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
          />
        </div>
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
        {
          <p className="err-message">{errorMessage}</p>
        }
        <div className="form-control">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id=""
            placeholder="Retype your password"
            required
          />
        </div>
        <div className="form-control">
          <input
            className="login-btn"
            type="submit"
            name=""
            id=""
            value="Sign Up"
            required
          />
        </div>
        <div className="redirect-container">
          {/* { accountExists === 
            <p></p>
          } */}
          <small>
            Already Have a Account? <Link to="/login">Login</Link>
          </small>
        </div>  
      </form>
    </div>
  );
};

export default SignUp;
