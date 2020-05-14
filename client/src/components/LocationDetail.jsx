// import React, { Component } from 'react'
import React from "react";
import { Link } from "react-router-dom";
import "./LocationDetail.css";

export default function Nav(props) {
  return (
    <>
      {props.locations
        .filter((location) => location.id == props.locationId)
        .map((specificLocation) => (
          <div className="detail-landing">
            <div className="detail-header-button">
              <p className="detail-header">
                {specificLocation.city}, {specificLocation.country}
              </p>
              <Link to={`/locations/${props.locationId}/edit`}>
                <button className="detail-button">Edit</button>
              </Link>

              <button
                className="detail-button"
                onClick={() => {
                  props.handleLocationDelete(props.locationId);
                  props.history.push("/locations");
                }}
              >
                Delete
              </button>
            </div>
            {/* </p> */}
            <img className="detail-photo" src={specificLocation.photo} />
            <div className="detail-card">
              <p className="details">Lodging Details</p>
              <p>{specificLocation.lodgingDetails}</p>
            </div>

            <div className="detail-card">
              <p className="details">Activity Details</p>
              <p>{specificLocation.activityDetails}</p>
            </div>

            <div className="detail-card">
              <p className="details">Yearnings</p>
              {/* <p>{specificLocation.tasks}</p> */}
            </div>
          </div>
        ))}
    </>
  );
}
