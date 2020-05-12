import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/api-helper';

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.confirmUser();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    // debugger;
    this.setState({ currentUser })
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push('/home');
  }

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
        />
      </div>
    )
  }
}

export default withRouter(App);
