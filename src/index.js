import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './Task2/add';
import Json2table from './Task3/jsonTotable';
import Weather from'./Task4/weather'
// import './index.css';
import Table from './Task1/TableformFElements';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path="/weather" element={<Weather />} />
      <Route path="/j2t" element={<Json2table/>} />
      <Route path="/add" element={<Add />} />
      <Route path="/" element={<Table />} />
    </Routes>
  </Router>
);

reportWebVitals();
