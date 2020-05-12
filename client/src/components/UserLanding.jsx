import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// export default function UserLanding(this.props) {

//   //  debugger; 
//   return (
//     <div>
//        {
//         this.props.currentUser
//           ?
//           <h1>Where are you going today, {this.props.currentUser.username} ?</h1>
//           :
//           <p>Userlanding welcome message and shows all locations</p>
//       }
//     </div>
//   )
// }
export default class UserLanding extends Component{
// export default function UserLanding(this.props) {

// componentDidMount(){
//   this.props.readAllLocations()
// }






  render() {
    // debugger;
    return (
      <div>
        <h3>Where are you going today ?</h3>
        {this.props.locations.map(location => (
          <React.Fragment key={location.id}>
            <Link to={`/locations/${location.id}`}>{location.city}, {location.country}</Link>
            <button onClick={() => {
              this.this.props.history.push(`/locations/${location.id}/edit`);
            }}>Edit</button>
            <button onClick={() => {
              this.props.handleLocationDelete(location.id);
            }}>Delete</button>
          </React.Fragment>
        ))}
        {/* <Link to="/foods/new"><button>Create</button></Link> */}
      </div>
    )
  }}
  