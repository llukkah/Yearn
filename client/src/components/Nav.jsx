import React from 'react';
import { Link } from 'react-router-dom';
import YearnLogo from '../images/YearnLogo.png'


export default function Nav(props) {
  return (
    <div>
    <Link to="/home"><img src={YearnLogo} alt="Yearn Logo" /></Link>
      <Link to="/about">About</Link>
      {
        props.currentUser
          ?
          <>
           <Link to="/locations/create">Create</Link>
           <Link to="/locations">Profile</Link>
            <button onClick={props.handleLogout}>Logout</button>
            </>
          :
          <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          </>
      }
    </div>
  )
}
