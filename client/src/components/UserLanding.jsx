import React from 'react';
import { Link } from 'react-router-dom';

// export default function UserLanding(props) {

//   //  debugger; 
//   return (
//     <div>
//        {
//         props.currentUser
//           ?
//           <h1>Where are you going today, {props.currentUser.username} ?</h1>
//           :
//           <p>Userlanding welcome message and shows all locations</p>
//       }
//     </div>
//   )
// }

export default function UserLanding(props) {
    return (
      <div>
        <h3>Where are you going today ?</h3>
        {props.locations.map(location => (
          <React.Fragment key={location.id}>
            <Link to={`/users/:id/locations/${location.id}`}>{location.city}, {location.country}</Link>
            <button onClick={() => {
              props.history.push(`/users/:id/locations/${location.id}/edit`);
            }}>Edit</button>
            <button onClick={() => {
              props.handleLocationDelete(location.id);
            }}>Delete</button>
          </React.Fragment>
        ))}
        {/* <Link to="/foods/new"><button>Create</button></Link> */}
      </div>
    )
  }
  