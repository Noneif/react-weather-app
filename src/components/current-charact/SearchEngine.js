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
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      coord: response.data.coord,
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

  function handleLinkKyiv(event) {
    event.preventDefault();
    setCity("Kyiv");
    setWeatherData({ load: false });
  }

  function handleLinkVienna(event) {
    event.preventDefault();
    setCity("Vienna");
    setWeatherData({ load: false });
  }

  function handleLinkLondon(event) {
    event.preventDefault();
    setCity("London");
    setWeatherData({ load: false });
  }

  function handleLinkParis(event) {
    event.preventDefault();
    setCity("Paris");
    setWeatherData({ load: false });
  }

  function handleLinkBerlin(event) {
    event.preventDefault();
    setCity("Berlin");
    setWeatherData({ load: false });
  }

  function handleLinkLisbon(event) {
    event.preventDefault();
    setCity("Lisbon");
    setWeatherData({ load: false });
  }

  if (weatherData.load) {
    return (
      <div className="SearchEngine">
        <div className="row text-center cityLinks">
          <div className="col-4  col-md-2 link">
            <a href="/" onClick={handleLinkKyiv}>
              KYIV
            </a>
          </div>
          <div className="col-4  col-md-2 link">
            <a href="/" onClick={handleLinkVienna}>
              VIENNA
            </a>
          </div>
          <div className="col-4  col-md-2 link">
            <a href="/" onClick={handleLinkLondon}>
              LONDON
            </a>
          </div>
          <div className="col-4  col-md-2 link">
            <a href="/" onClick={handleLinkParis}>
              PARIS
            </a>
          </div>
          <div className="col-4  col-md-2 link">
            <a href="/" onClick={handleLinkBerlin}>
              BERLIN
            </a>
          </div>
          <div className="col-4  col-md-2 link">
            <a href="/" onClick={handleLinkLisbon}>
              LISBON
            </a>
          </div>
        </div>
        <div className="row mb-3">
          <TimeUpdate value={weatherData.date} />
          <div className="col-sm-8">
            <form className="input-group" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                name="city"
                placeholder="city"
                id="form-control"
                autoComplete="off"
                onChange={showCity}
              />
              <button type="submit" className="btn btn-primary blue">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
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
