import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserLanding extends Component {
  render() {
    // debugger;
    return (
      <div>
        <h3>Where are you going today ?</h3>
        {this.props.locations.map((location) => (
          <React.Fragment key={location.id}>
            <Link to={`/locations/${location.id}`}>
              <img src={location.photo} /> {location.city},
              {location.country}
            </Link>
            {/* <button
              onClick={() => {
                this.this.props.history.push(`/locations/${location.id}/edit`);
              }}
            >
              Edit
            </button>*/}
            {/* <button
              onClick={() => {
                this.props.handleLocationDelete(location.id);
              }}
            >
              Delete
            </button> */}
          </React.Fragment>
        ))}
        {/* <Link to="/foods/new"><button>Create</button></Link> */}

        <Link to="/locations/create">
          <button>Create</button>
        </Link>
      </div>
    );
  }
}
