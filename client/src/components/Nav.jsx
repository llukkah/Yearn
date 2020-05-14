import React from "react";
import { Link } from "react-router-dom";
import YearnLogo from "../images/YearnLogo.png";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div>
      <div className="nav-header">
        <Link to="/home" className="logo">
          <img src={YearnLogo} alt="Yearn Logo" />
        </Link>
        <div className="nav-link">
          <Link to="/about" className="nav-link-about">About</Link>
          {props.currentUser ? (
            <>
              <Link to="/locations/create">Create</Link>
              <Link to="/locations">Profile</Link>
              <button onClick={props.handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
