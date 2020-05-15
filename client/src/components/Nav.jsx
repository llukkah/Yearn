import React from "react";
import { Link } from "react-router-dom";
import YearnLogo from "../images/YearnLogo.png";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div>
      <div className="nav-header">
        <span className="logo">
          <Link to="/home" className="logo">
            <img src={YearnLogo} alt="Yearn Logo" />
          </Link>
        </span>

        <span className="nav-link">
          <Link to="/about" className="nav-link-about">
            About
          </Link>
          {props.currentUser ? (
            <>
              <Link to="/locations/create" className="nav-link-right">
                Create
              </Link>
              <Link to="/locations" className="nav-link-right">
                Profile
              </Link>
              <Link onClick={props.handleLogout} className="nav-link-right">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link-right">
                Login
              </Link>
              <Link to="/register" className="nav-link-right">
                Register
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
}