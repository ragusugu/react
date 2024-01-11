import React, { Component } from 'react';

class Home extends Component {
  handleLogout = () => {
    // Implement any necessary logout logic (clearing user session, removing tokens)
    localStorage.removeItem('token');
    this.props.onLogout(); // Notify parent component about logout
  };

  render() {
    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        {/* Your home page content goes here */}
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Home;
