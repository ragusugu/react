import React, { Component } from 'react';
import axios from 'axios';

class LoginComponent extends Component {
  // ... (rest of the code)
     constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: '',
       error: null,
     };
   }
 
   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value,
     });
   };
 
   handleSubmit = async (event) => {
     event.preventDefault();
 
     const { email, password } = this.state;
 
     // Perform validation before API call
     if (!email || !password) {
       this.setState({ error: 'Please enter email and password' });
       return;
     }
 
     try {
       const response = await axios.post('https://dev-qualdo.eastus.cloudapp.azure.com/iam/login', {
         email,
         password,
       });
 
       // Handle successful login (e.g., store token, redirect to dashboard)
       console.log('Login successful:', response.data);
     } catch (error) {
       this.setState({ error: 'Invalid email or password' });
     }
   };
  render() {
    const { email, password, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
        {error?.email && <p className="error">{error.email}</p>}
        <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" />
        {error?.password && <p className="error">{error.password}</p>}
        <button type="submit">Login</button>
      </form>
    );
  }
}
export default LoginComponent();