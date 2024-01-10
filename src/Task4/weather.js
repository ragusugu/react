import React, { useState } from 'react';
import './weather.css'


const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    if (!location.trim()) {
      alert('Please enter a location');
      return;
    }

    const apiKey = 'ea1736c136msh0f5c187e704eedbp15d852jsn9c8eb45d2ffd';
    const apiUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching weather data.');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div>
      <label htmlFor="location">Enter Location:</label>
      <input
        type="text"
        id="location"
        placeholder="Enter city name"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      <div>
        {weatherData && (
          <>
            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
          </>
        )}
      </div>
      
    </div>
  );
};

export default WeatherApp;
