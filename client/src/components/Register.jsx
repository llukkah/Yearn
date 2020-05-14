import React, { Component } from "react";

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
        <label className="form-category" htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <label className="form-category" htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={email}
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
