import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../../utils/userService";
import '../Login/Login.css'

const Register = ({ handleSignupOrLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(formData);
      navigate("/login");
    } catch (err) {
      console.error("Signup unsuccessful.", err);
    }
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <div className="lwrapper">
        <div className="lleft">
          <h3 className="llogo">Bunnybook</h3>
          <span className="ldsc">
            Stay connected with those you love. Discover what's going on in the
            world. Share and express what matters.
          </span>
        </div>
        <div className="lright">
          <form method="POST" action="#" className="lbox">
            <input
              id="username"
              name="username"
              type="text"
              className="linput"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              className="linput"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <input
              id="password"
              name="password"
              type="password"
              className="linput"
              placeholder="Password"
              onChange={handleChange}
            />

            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              className="linput"
              placeholder="Re-type Password"
              onChange={handleChange}
              autoComplete='on'
            />
             <button type='submit' className="signupbutton">Create a New Account</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
