import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./Main.css";
import Login from "./Login";
import Register from "./Register";
import {
  getAllLocations,
  getOneLocation,
  postLocation,
  putLocation,
  destroyLocation,
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
        {/* locations/new... CreateLocation */}
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
        {/* locations/id/edit.... update location component */}
        <Route
          path="/locations/:id/edit"
          render={(props) => {
            const { id } = props.match.params;
            return (
              <LocationUpdate
                {...props}
                locationId={id}
                locations={this.state.locations}
                handleLocationUpdate={this.handleLocationUpdate}
              />
            );
          }}
        />
        {/* <Route exact path='/foods' render={(props) => (
          <ShowFoods
            {...props}
            handleFoodDelete={this.handleFoodDelete}
            foods={this.state.foods}
          />
        )} /> */}
      </main>
    );
  }
}
