import React, { Component } from "react";
import "./LocationCreate.css";
import { getOneLocation } from "../services/api-helper";

export default class LocationUpdate extends Component {
  state = {
    city: "",
    country: "",
    photo: "",
    lodgingDetails: "",
    activityDetails: "",
    tasks: [],
    // listItem: "",
    // listItem2: "",
    // listItem3: "",
    // listItem4: "",
    // listItem5: "",
    // listItem6: "",
    user_id: this.props.currentUser.id,
  };

  componentDidMount() {
    // let user_id = this.props.currentUser.id;
    // this.setState({
    //   user_id: user_id,
    // });

    this.setFormData();
  }

  setFormData = async () => {
    const locationItem = await getOneLocation(this.props.locationId);
    this.setState({
      city: locationItem.city,
      country: locationItem.country,
      photo: locationItem.photo,
      lodgingDetails: locationItem.lodgingDetails,
      activityDetails: locationItem.activityDetails,
      tasks: locationItem.listItem,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLocationUpdate(this.props.locationId, this.state);
          this.props.history.push("/locations");
        }}
      >
        <h3>Edit Your Location</h3>
        <p className="form-category">City</p>
        <input
          name="city"
          type="text"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <p className="form-category">Country</p>
        <input
          name="country"
          type="text"
          value={this.state.country}
          onChange={this.handleChange}
        />
        <p className="form-category">PhotoURL</p>
        <input
          name="photo"
          type="text"
          value={this.state.photo}
          onChange={this.handleChange}
        />
        <p className="form-category">Lodging Details</p>
        <input
          className="form-category-details"
          name="lodgingDetails"
          type="text"
          value={this.state.lodgingDetails}
          onChange={this.handleChange}
        />
        <p className="form-category">Activity Itinerary</p>
        <input
          className="form-category-details"
          name="activityDetails"
          type="text"
          value={this.state.activityDetails}
          onChange={this.handleChange}
        />
        <p className="form-category">Bucket List Items</p>
        <input
          className="form-category-details"
          name="tasks"
          type="text"
          // value={this.state.listItem}
          value={this.state.tasks}
          onChange={this.handleChange}
        />
        <button className="form-button">Save</button>
      </form>
    );
  }
}