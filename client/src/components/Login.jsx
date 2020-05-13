import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { username, email, password } = this.state;
    // debugger;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // this.props.handleLogin(this.state);
          this.props.setLocationData(this.state, this.props.handleLogin);

          // this.props.readAllLocations();
          // debugger;
          this.props.history.push("/locations");
        }}
      >
        <h3>Login</h3>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <label htmlFor="email">email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}
