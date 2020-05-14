import React, { Component } from "react";
import "./LocationCreate.css";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.setLocationData(this.state, this.props.handleRegister);
          this.props.history.push("/locations");
        }}
      >
        <h3>Register</h3>
        <p className="form-category-lr" htmlFor="username">Username</p>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <p className="form-category-lr" htmlFor="email">Email</p>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
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
