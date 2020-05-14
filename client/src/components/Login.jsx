import React, { Component } from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.setLocationData(this.state, this.props.handleLogin);
          this.props.history.push("/locations");
        }}
      >
        <h3>Login</h3>
        <label className="form-category" htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <label className="form-category" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <button className="form-button">Submit</button>
      </form>
    );
  }
}
