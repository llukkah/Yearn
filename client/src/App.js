import React, { Component } from "react";
import { withRouter } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/api-helper";

class App extends Component {
  state = {
    currentUser: null,
  };

  // componentDidMount() {
  //   this.confirmUser();
  // }

  handleLogin = async (loginData) => {
    const { currentUser, locations, tasks } = await loginUser(loginData);
    this.setState({ currentUser });
    return { locations, tasks };
  };

  handleRegister = async (registerData) => {
    const { currentUser, locations, tasks } = await registerUser(registerData);
    this.setState({ currentUser });
    return { locations, tasks };
  };

  confirmUser = async () => {
    const { currentUser, locations, tasks } = await verifyUser();
    this.setState({ currentUser });
    return { locations, tasks };
  };

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null,
    });
    removeToken();
    this.props.history.push("/home");
  };

  render() {
    return (
      <div className="App">
        <Nav
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Main
          handleRegister={this.handleRegister}
          handleLogin={this.handleLogin}
          confirmUser={this.confirmUser}
        />
      </div>
    );
  }
}

export default withRouter(App);
