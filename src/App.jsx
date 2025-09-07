import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("Berlin"); // default city
  const [weather, setWeather] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found!");
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  // Load default weather for Berlin
useEffect(() => {
  fetchWeather(city);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Weather Explorer</h1>
        <p>Stay updated with the latest weather condition</p>
      </header>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Enter city name..."
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="weather-container">
        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;
