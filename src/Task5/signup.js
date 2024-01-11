// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const validateEmail = () => {
    return email.includes('@');
  };

  const validatePassword = () => {
    return password.length >= 8;
  };

  const validateConfirmPassword = () => {
    return confirmPassword === password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail() || !validatePassword() || !validateConfirmPassword()) {
      setError('Invalid email, password, or confirmPassword');
      return;
    }

    try {
      const response = await axios.post(
        'https://dev-qualdo.eastus.cloudapp.azure.com/iam/signup',
        { email, password }
      );

      localStorage.setItem('token', response.data.token);
      onSignup();
    } catch (error) {
      setError(error.response.data.message || 'Signup failed');
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
      {error && <div className="error">{error}</div>}
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
