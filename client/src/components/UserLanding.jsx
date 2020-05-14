import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserLanding.css";

export default class UserLanding extends Component {
  render() {
    return (
      <>
        <div className="user-landing">
          <div className="user-landing-header">
            <h3 className="user-landing-header-text">
              Where are you going today ?
            </h3>
          </div>
          <Link to="/locations/create">
            <button>Create</button>
          </Link>
          <div>
            {this.props.locations.map((location) => (
              <React.Fragment key={location.id}>
                <Link
                  to={`/locations/${location.id}`}
                  className="user-landing-card"
                >
                  <img className="city-photo" src={location.photo} />{" "}
                  {location.city}, {location.country}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </>
    );
  }
}
