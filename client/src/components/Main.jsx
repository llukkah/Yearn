import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import {
  getAllLocations,
  getOneLocation,
  postLocation,
  putLocation,
  destroyLocation,
  destroyTask,
  postTask,
} from "../services/api-helper";
import About from "./About";
import Home from "./Home";
import UserLanding from "./UserLanding";
import LocationCreate from "./LocationCreate";
import LocationDetail from "./LocationDetail";
import LocationUpdate from "./LocationUpdate";

export default class Main extends Component {
  state = {
    locations: [],
    tasks: [],
  };

  componentDidMount() {
    this.setLocationData({}, this.props.confirmUser);
  }
  //======================================
  //============== Location ==============
  //======================================
  readAllLocations = async () => {
    const locations = await getAllLocations();
    this.setState({ locations });
  };

  readOneLocation = async () => {
    const location = await getOneLocation();
    this.setState({ location });
  };

  handleLocationSubmit = async (locationData) => {
    const newLocation = await postLocation(locationData);
    this.setState((prevState) => ({
      locations: [...prevState.locations, newLocation],
    }));
  };

  handleLocationUpdate = async (id, locationData) => {
    const updatedLocation = await putLocation(id, locationData);
    this.setState((prevState) => ({
      locations: prevState.locations.map((location) => {
        return location.id === id ? updatedLocation : location;
      }),
    }));
  };

  handleLocationDelete = async (id) => {
    await destroyLocation(id);
    this.setState((prevState) => ({
      locations: prevState.locations.filter((location) => {
        return location.id !== id;
      }),
    }));
  };


  //======================================
  //================= Tasks ==============
  //======================================
  //delete  1 task
  
    handleTaskDelete = async (locationId, taskId) => {
      await destroyTask(locationId, taskId);
    };

    //create 1 task
  handleTaskSubmit = async (taskData) => {
    const newTask = await postTask(taskData);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  };






  //call for login register and verify
  setLocationData = async (authData, authFN) => {
    const { locations, tasks } = await authFN(authData);
    this.setState({ locations, tasks });
  };

  render() {
    return (
      <main>
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Route
          path="/login"
          render={(props) => (
            <Login
              {...props}
              handleLogin={this.props.handleLogin}
              setLocationData={this.setLocationData}
            />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register
              {...props}
              handleRegister={this.props.handleRegister}
              setLocationData={this.setLocationData}
            />
          )}
        />
        <Route
          exact
          path="/locations"
          render={(props) => (
            <UserLanding
              {...props}
              handleLocationDelete={this.handleLocationDelete}
              locations={this.state.locations}
              readAllLocations={this.readAllLocations}
              handleLocationSubmit={this.handleLocationSubmit}
            />
          )}
        />
        <Route
          path="/locations/create"
          render={(props) => (
            <LocationCreate
              {...props}
              currentUser={this.props.currentUser}
              handleLocationSubmit={this.handleLocationSubmit}
            />
          )}
        />

        <Route
          exact
          path="/locations/:id"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <LocationDetail
                {...props}
                locationId={id}
                locations={this.state.locations}
                readOneLocation={this.state.readOneLocation}
                handleLocationDelete={this.handleLocationDelete}
                handleLocationUpdate={this.handleLocationUpdate}
              />
            );
          }}
        />

        <Route
          path="/locations/:id/edit"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <LocationUpdate
                {...props}
                handleLocationUpdate={this.handleLocationUpdate}
                locationId={id}
                currentUser={this.props.currentUser}
                handleLocationSubmit={this.handleLocationSubmit}
                handleLocationDelete={this.handleLocationDelete}
                handleTaskDelete={this.handleTaskDelete}
                handleTaskSubmit={this.handleTaskSubmit}
              />
            );
          }}
        />
      </main>
    );
  }
}
