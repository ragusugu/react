import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

class AddButton extends Component {
  render() {
    return <button onClick={this.props.onClick}>Open Task 6</button>;
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }

  // Validation functions
  validateEmail = () => {
    return this.state.email.includes("@");
  };

  validatePassword = () => {
    return this.state.password.length >= 8;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields upfront
    if (this.state.email.trim() === "" || this.state.password.trim() === "") {
      this.setState({ error: "Please fill in both email and password." });
      return;
    }

    // Validate email and password
    if (!this.validateEmail() || !this.validatePassword()) {
      this.setState({ error: "Invalid email or password" });
      return;
    }

    try {
      var response = await axios.post(
        "https://dev-qualdo.eastus.cloudapp.azure.com/iam/login",
        { email: this.state.email, password: this.state.password }, // Add a comma here
        {
          headers: {
            "Content-Type": "application/json",
            "Api-Type": "qualdo_db_auth",
          },
        }
      );

      // Check if 'data' property exists in the response
      if (response && response.data) {
        if (response.data.account_features.code === 200) {
          // Redirect to the home page or perform any other necessary action
          this.props.onLogin();
          this.props.history.push("/home");
        } else {
          // Handle the case where 'data' property is not available
          this.setState({
            error: "Login failed. Invalid response from the server.",
          });
        }
      }
    } catch (error) {
      // Handle other errors, including cases where the response is undefined
      this.setState({ error: error.response?.data?.message || "Login failed" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            required
            onBlur={() => {
              if (!this.validateEmail()) {
                this.setState({ error: "Invalid email address" });
              } else {
                this.setState({ error: null });
              }
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            required
            onBlur={() => {
              if (!this.validatePassword()) {
                this.setState({
                  error: "Password must be at least 8 characters",
                });
              } else {
                this.setState({ error: null });
              }
            }}
          />
        </div>
        {this.state.error && <div className="error">{this.state.error}</div>}
        <div className="button-container">
          <button type="submit">Login</button>
          <Link to="/signup">Signup</Link>
        </div>
        <br />
        <br />
        <div>
          <AddButton onClick={this.openTask6} />
        </div>
      </form>
    );
  }

  openTask6 = () => {
    window.open("", "_blank");
  };
}

export default LoginForm;
