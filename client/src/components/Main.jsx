import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import { getAllLocations, getOneLocation, getAllTasks, postLocation, putLocation, destroyLocation, putLocation } from '../services/api-helper';
import UserLanding from './UserLanding';
// import ShowFoods from './ShowFoods';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
// import FoodItem from './FoodItem';

export default class Main extends Component {
  state = {
    locations: [],
    tasks: []
  }

  componentDidMount() {
    this.readAllLocations();
    this.readAllFoods();
  }
  //======================================
  //============== Location ==============
  //======================================
  readAllLocations = async () => {
    const locations = await getAllLocations();
    this.setState({ locations })
  }

  readOneLocation = async () => {
    const location = await getOneLocation();
    this.setState({ location })
  }

  handleLocationSubmit = async (locationData) => {
    const newLocation = await postLocation(locationData);
    this.setState(prevState => ({
      locations: [...prevState.locations, newLocation]
    }))
  }

  handleLocationUpdate = async (id, locationData) => {
    const updatedLocation = await putLocation(id, locationData);
    this.setState(prevState => ({
      locations: prevState.locations.map(location => {
        return location.id === id ? updatedLocation : location
      })
    }))
  }

  handleLocationDelete = async (id) => {
    await destroyLocation(id);
    this.setState(prevState => ({
      locations: prevState.locations.filter(location => {
        return location.id !== id
      })
    }))
  }
  
  
  //======================================
  //=============== Tasks ================
  //======================================
  readAllTasks = async () => {
    const tasks = await getAllTasks();
    this.setState({ tasks })
  }

  handleTaskSubmit = async (taskData) => {
    const newTask = await postTask(taskData);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }))
  }

  handleTaskUpdate = async (id, taskData) => {
    const updatedTask = await putLocation(id, taskData);
    this.setState(prevState => ({
      tasks: prevState.locations.map(task => {
        return task.id === id ? updatedTask : task
      })
    }))
  }

  handleTaskDelete = async (id) => {
    await destroyTask(id);
    this.setState(prevState => ({
      tasks: prevState.locations.filter(task => {
        return task.id !== id
      })
    }))
  }

  render() {
    return (
      <main>
        <Route path='/login' render={(props) => (
          <Login
            {...props}
            handleLogin={this.props.handleLogin}
          />
        )} />
        <Route path='/register' render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister}
          />
        )} />
        <Route path='/users/:id/locations' render={() => (
          <UserLanding
            locations={this.state.locations}
          />
        )} />
        {/*<Route exact path='/foods' render={(props) => (
          <ShowFoods
            {...props}
            handleFoodDelete={this.handleFoodDelete}
            foods={this.state.foods}
          />
        )} />
        <Route path="/foods/new" render={(props) => (
          <CreateFood
            {...props}
            handleFoodSubmit={this.handleFoodSubmit}
          />
        )} />
        <Route path='/foods/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateFood
            {...props}
            handleFoodUpdate={this.handleFoodUpdate}
            foodId={id}
          />
        }} />
        <Route exact path='/foods/:id' render={(props) => {
          const { id } = props.match.params
          return <FoodItem
            foodId={id}
            flavors={this.state.flavors}
          />
        }
        } /> */}
      </main>
    )
  }
}
