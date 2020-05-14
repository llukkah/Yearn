import React, { Component } from "react";
// import "./LocationCreate.css";
import "./Login.css";
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
        <p className="form-category-lr" htmlFor="username">Username</p>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <p className="form-category-lr" htmlFor="password">Password</p>
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
