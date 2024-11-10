import React, { useState } from "react";
import "./LoginPopup.css";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
        {currState==="Login" ? <></> :        <input type="text" placeholder="Your Name" required/> }
        <input type="email" placeholder="Your Email" required/>
        <input type="password" placeholder="Password" required/>
        </div>
        <button>{currState==="Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By Continuing, I agree to the term of use & Privacy Policy</p>
        </div>
        {currState==="Login" 
            ?        <p>Create a account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
            :        <p>Already have a account <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        }
      </form>
    </div>
  );
};
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
export default LoginPopup;
