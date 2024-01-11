import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './Task2/add';
import Json2table from './Task3/jsonTotable';
import Weather from'./Task4/weather';
// import Signup from'./Task5/signup';
// import Home from'./Task5/home';
// import Loginclass from'./Task6/loginclass.js';
// import './index.css';
import Table from './Task1/TableformFElements';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/app" element={<App />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/j2t" element={<Json2table />} />
        <Route path="/add" element={<Add />} />
        <Route path="/" element={<Table />} />
        {/* <Route path="/loginClass" element={<Loginclass />} /> */}
      
      </Routes>
    </Router>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
