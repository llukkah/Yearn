import React, { Component } from "react";
import "./LocationCreate.css";
import "./LocationUpdate.css";
import { Link } from "react-router-dom";
import { getOneLocation, destroyTask } from "../services/api-helper";

export default class LocationUpdate extends Component {
  state = {
    city: "",
    country: "",
    photo: "",
    lodgingDetails: "",
    activityDetails: "",
    tasks: [],
    user_id: this.props.currentUser.id,
  };

  componentDidMount() {
    // let user_id = this.props.currentUser.id;
    // this.setState({
    //   user_id: user_id,
    // });

    this.setFormData();
  }

  handleTaskDelete = async (locationId, taskId) => {
    await destroyTask(locationId, taskId);
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => {
        return task.id !== taskId;
      }),
    }));
  };

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
        {this.state.tasks.map((task) => (
          <div className="bucket-list-div">
            <p className="bucket-list-item">{task.listItem} 
            <Link className="delete-task-button" onClick={() => {
            this.handleTaskDelete(this.props.locationId, task.id); 
          }}>Delete</Link>
          </p>
          </div>
          ))}



        {/* ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        /////////////////////////////////////////////////////// 
        add single input field and update with submit button.
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        /////////////////////////////////////////////////////// */}

        <input
          className="form-category-details"
          placeholder="none"
          type="text"
          name="tasks"
          value={this.state.tasks}
          onChange={this.handleChange}
        />
        <button
        className="form-button"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLocationSubmit(this.props.locationId, this.state);
          // this.props.handleLocationSubmit(this.props.locationId, this.state.tasks);    
        
        
        }}>Create New Yearning</button>





{/* 
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////
        /////////////////////////////////////////////////////// */}

        <button className="form-button">Save Location and Yearnings</button>
      </form>
    );
  }
}