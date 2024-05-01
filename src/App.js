import React, { useState, useEffect } from "react";
import Hero from "./Hero.jsx";
import './index.css';
import clear_icon from './Assets/clear.png';
import cloud_icon from './Assets/cloud.png';
import rain_icon from './Assets/rain.png';
import drizzle_icon from './Assets/drizzle.png';
import snow_icon from './Assets/snow.png';

const App = () => {
  const URL_API = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "your_key";

  const [city, setCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);

  const searchCity = async (cityName) => {
    const response = await fetch(`${URL_API}?q=${cityName}&appid=${API_KEY}`);
    const data = await response.json();
    setCity(data);
    if (data && data.main && data.main.temp) {
      setTemperature(data.main.temp);
    } else {
      setTemperature(null);
    }
    if (data && data.weather && data.weather[0] && data.weather[0].icon) {
      if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
        setWeatherCondition(clear_icon);
      } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
        setWeatherCondition(cloud_icon);
      } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
        setWeatherCondition(drizzle_icon);
      } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
        setWeatherCondition(drizzle_icon);
      } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
        setWeatherCondition(rain_icon);
      } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
        setWeatherCondition(rain_icon);
      } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
        setWeatherCondition(snow_icon);
      } else {
        setWeatherCondition(clear_icon);
      }
    }
  }


  useEffect(() => {
    searchCity("Poznan");
  }, []);

  return (
    <>
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchCity={searchCity}
        cityName={city.name}
        temperature={Math.round(temperature - 273.15)}
        weatherCondition={weatherCondition}
      />
    </>
  );
}

export default App;