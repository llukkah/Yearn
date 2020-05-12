import React from 'react';
// import { Link } from 'react-router-dom';

export default function UserLanding(props) {
  return (
    <header>
      <h1>Where are you going today, {props.currentUser.username} ?</h1>
      {/* {
        props.currentUser
          ?
          <>
            <p>{props.currentUser.username}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </>
          :
          <Link to="/login">Login/Register</Link>
      }
      <hr />
      {
        props.currentUser
        &&
        <>
          <Link to="/foods">Foods</Link>
          <Link to="/flavors">Flavors</Link>
          <hr />
        </>
      } */}

    </header>
  )
}
