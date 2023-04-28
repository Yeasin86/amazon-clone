import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form onSubmit={handleLogIn} className="form-container">
      <label htmlFor="">
        <h2 className="form-title">Login</h2>
      </label>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>

        <div className="password-box">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            required
          />
          {
              showPass?
              <EyeSlashIcon onClick={()=>{setShowPass(false)}} className="show-pass-icon" />
              : 
              <EyeIcon onClick={()=>{setShowPass(true)}} className="show-pass-icon" />
          }
        </div>
      </div>
      <div className="form-control">
        <input
          className="login-btn"
          type="submit"
          name="login-btn"
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
