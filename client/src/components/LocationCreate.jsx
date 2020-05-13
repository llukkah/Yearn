import React, { Component } from "react";

export default class LocationCreate extends Component {
  state = {
    city: "",
    country: "",
    photo: "",
    lodgingDetails: "",
    activityDetails: "",
    listItem: "",
    listItem2: "",
    user_id: null
  };

  componentDidMount() {
      let user_id = this.props.currentUser.id
      this.setState({
          user_id: user_id
      })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLocationSubmit(this.state);
          this.props.history.push("/locations");
        }}
      >
        <h3>Where would you like to go ?</h3>
        <input
          placeholder="City Name"
          name="city"
          type="text"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <input
          name="country"
          placeholder="Country"
          type="text"
          value={this.state.country}
          onChange={this.handleChange}
        />
        <input
        name="photo"
          placeholder="Photo URL"
          type="text"
          value={this.state.photo}
          onChange={this.handleChange}
        />
        <input
        name="lodgingDetails"
          placeholder="Lodging Details"
          type="text"
          value={this.state.lodgingDetails}
          onChange={this.handleChange}
        />
        <input
        name="activityDetails"
          placeholder="Activity Itinerary"
          type="text"
          value={this.state.activityDetails}
          onChange={this.handleChange}
        />
        <input
        name="listItem"
          placeholder="Bucket List Items"
          type="text"
          value={this.state.listItem}
          onChange={this.handleChange}
        />
        <input
        name="listItem2"
          type="text"
          value={this.state.listItem2}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
