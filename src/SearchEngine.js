import React, { useState } from "react";

import TimeUpdate from "./TimeUpdate";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";
import "./SearchEngine.css";

function SearchEngine(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ load: false });

  function showWeatherInfo(response) {
    setWeatherData({
      load: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = `94acf2da0785bb3e4d1e3cb839ee7521`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q`;
    let apiUrl = `${url}=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeatherInfo);
  }

  function showCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.load) {
    return (
      <div className="SearchEngine">
        <div className="row mb-3">
          <TimeUpdate value={weatherData.date} />
          <div className="col-sm-8">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-0 box">
                <span className="input-group-text">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  placeholder="city"
                  id="form-control"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={showCity}
                />
                <button type="submit" className="btn btn-primary blue">
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default SearchEngine;
