// SignupForm.js
import React, { useState } from "react";
import axios from "axios";

const SignupForm = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompanyName] = useState("");
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [phone_number, setMobileNumber] = useState("");
  // const [user_signup_type,setState] =useState("Api-Type")
  // const [user_signup_type, setUserSignupType] = useState("qulado_db_auth");
  const [error, setError] = useState(null);

  const validateEmail = () => {
    return email.includes("@");
  };

  const validatePassword = () => {
    return password.length >= 8;
  };

  const validateConfirmPassword = () => {
    return confirmPassword === password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail() || !validatePassword() || !validateConfirmPassword()) {
      setError("Invalid email, password, or confirmPassword");
      return;
    }

    try {
     const response = await axios.post(
        'https://dev-qualdo.eastus.cloudapp.azure.com/iam/signup',
        {
          email,
          password,
          first_name,
          last_name,
          username,
          company,
          phone_number,
          user_signup_type:"qualdo_db_auth",
        },
        { headers:{'Api-Type':"qualdo_db_auth" },}
      );

      localStorage.setItem("token", response.data.token);
      onSignup();
    } catch (error) {
      setError(error.response.data.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={company}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={phone_number}
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
      </div>
      {error && <div className="error">{error}</div>}
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
