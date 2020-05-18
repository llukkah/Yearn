import React, { Component } from "react";
import "./LocationCreate.css";
import "./LocationUpdate.css";
import { Link } from "react-router-dom";
import { getOneLocation, destroyTask, postTask } from "../services/api-helper";

export default class LocationUpdate extends Component {
  state = {
    city: "",
    country: "",
    photo: "",
    lodgingDetails: "",
    activityDetails: "",
    tasks: [],
    user_id: this.props.currentUser.id,
    listItem: "",
  };

  componentDidMount() {
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


  handleTaskSubmit = async (locationId, taskData) => {
    const newTask = await postTask(locationId, taskData);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
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

        <p className="form-category">Yearnings</p>
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
{/* 
        <input
          className="form-category-details"
          placeholder="none"
          type="text"
          name="taskField"
          value={this.state.taskField}
          onChange={this.handleChange}
        />
        <button
        className="form-button"
        onSubmit={(e) => {
          e.preventDefault();
          this.handleTaskSubmit(this.props.locationId, this.state);  
        
        }}>Create New Yearning</button> */}

        <button className="form-button">Save Location and Yearnings</button>
      </form>
    );
  }
}