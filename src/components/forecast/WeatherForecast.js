import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastHourNow from "./ForecastHourNow";
import ForecastHour from "./ForecastHour";
import ForecastDayToday from "./ForecastDayToday";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="titleForecast t-hour">
          <i className="fa-solid fa-clock"></i> HOURLY FORECAST
        </div>
        <div className="row">
          <div className="col-4 col-md-2 d-flex justify-content-center p-2 text-center">
            <ForecastHourNow data={hour[0]} hour={"Now"} />
          </div>
          {hour.map((value, index) => {
            if (index > 0 && index < 6) {
              return (
                <div
                  className="col-4 col-md-2 d-flex justify-content-center p-2 text-center"
                  key={index}
                >
                  <ForecastHour data={value} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="titleForecast t-day">
          <i className="fa-regular fa-calendar-days"></i> 6-DAY FORECAST
        </div>
        <div className="row">
          <div className="col-4 col-md-2 d-flex justify-content-center p-2 text-center">
            <ForecastDayToday data={day[0]} day={"Today"} />
          </div>
          {day.map((value, index) => {
            if (index > 0 && index < 6) {
              return (
                <div
                  className="col-4 col-md-2 d-flex justify-content-center p-2 text-center"
                  key={index}
                >
                  <ForecastDay data={value} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `61201d60cdffebc1d979270203e5b6b9`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?`;
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let units = `metric`;
    let apiUrl = `${url}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then((response) => {
      setLoaded(true);
      setDay(response.data.daily);
      setHour(response.data.hourly);
    });
    return null;
  }
}

export default WeatherForecast;
