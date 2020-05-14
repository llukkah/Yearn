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
    tasks: "",
    // listItem: "",
    // listItem2: "",
    // listItem3: "",
    // listItem4: "",
    // listItem5: "",
    // listItem6: "",
    user_id: null,
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
      tasks: locationItem.tasks,
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
        {/* <p className="form-category"></p>
        <input
          name="listItem2"
          placeholder="Spend a Sunday in Dolores Park"
          type="text"
          value={this.state.listItem2}
          onChange={this.handleChange}
        />
        <p className="form-category"></p>
        <input
          name="listItem3"
          placeholder="Cruise Lombard Street"
          type="text"
          value={this.state.listItem3}
          onChange={this.handleChange}
        /> */}
        {/* <p className="form-category"></p>
        <input
          name="listItem4"
          placeholder="Watch fog roll in at Twin Peaks"
          type="text"
          value={this.state.listItem4}
          onChange={this.handleChange}
        />
        <p className="form-category"></p>
        <input
          name="listItem5"
          placeholder="Castro!"
          type="text"
          value={this.state.listItem5}
          onChange={this.handleChange}
        />
        <p className="form-category"></p>
        <input
          name="listItem6"
          placeholder="SF Pride last week of June"
          type="text"
          value={this.state.listItem2}
          onChange={this.handleChange}
        />  */}

        <button className="form-button">Save</button>
      </form>
    );
  }
}
