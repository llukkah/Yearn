import React, { Component } from "react";
import "./LocationCreate.css";

export default class LocationCreate extends Component {
  state = {
    city: "",
    country: "",
    photo: "",
    lodgingDetails: "",
    activityDetails: "",
    tasks: [],
    user_id: null,
  };

  componentDidMount() {
    let user_id = this.props.currentUser.id;
    this.setState({
      user_id: user_id,
    });
  }
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
          this.props.handleLocationSubmit(this.state);
          this.props.history.push("/locations");
        }}
      >
        <h3>Where would you like to go ?</h3>
        <p className="form-category">City</p>
        <input
          placeholder="San Francisco"
          name="city"
          type="text"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <p className="form-category">Country</p>
        <input
          name="country"
          placeholder="U.S.A."
          type="text"
          value={this.state.country}
          onChange={this.handleChange}
        />
        <p className="form-category">PhotoURL</p>
        <input
          name="photo"
          placeholder="https://www.photo.com/GoldenGateBridge.jpg"
          type="text"
          value={this.state.photo}
          onChange={this.handleChange}
        />
        <p className="form-category">Lodging Details</p>
        <input
          className="form-category-details"
          name="lodgingDetails"
          placeholder="Airbnb, Mission District, SF, CA 415-555-5555"
          type="text"
          value={this.state.lodgingDetails}
          onChange={this.handleChange}
        />
        <p className="form-category">Activity Itinerary</p>
        <input
          className="form-category-details"
          name="activityDetails"
          placeholder="Sunset boatride at 6pm"
          type="text"
          value={this.state.activityDetails}
          onChange={this.handleChange}
        />


        {/* ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////

        CREATE TASK.
        INPUT NEEDED TO ADD TASK TO DB

        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        /////////////////////////////////////////////////////// */}
        <p className="form-category">Bucket List Items</p>
        <p>{this.state.tasks.listItem}</p>
        <input
          className="form-category-details"
          name="tasks"
          placeholder="Walk the Golden Gate Bridge"
          type="text"
          // value={this.state.listItem}
          value={this.state.tasks}
          onChange={this.handleChange}
          
        />

          <button
          className="form-button"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleLocationSubmit(this.state.tasks);
            // this.props.handleLocationSubmit(this.props.locationId, this.state.tasks);    
          
          
          }}>Create New Yearning</button>


        {/* ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////      */}



        <button className="form-button">Save New Location</button>
      </form>
    );
  }
}