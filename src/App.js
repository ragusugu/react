// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Task5/login';
import SignupForm from './Task5/signup';
import Home from './Task5/home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/login" /> : <SignupForm onSignup={handleSignup} />}
        />
        <Route
          path="/home"
          element={isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
