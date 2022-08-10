import React from "react";

import Icon from "./Icon";

import "./ForecastDay.css";

function ForecastDay(props) {
  let time = new Date(props.data.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let day = days[time.getDay()];

  return (
    <div className="ForecastDay">
      <p className="d-flex align-items-center d-sm-block day">{day}</p>
      <Icon code={props.data.weather[0].icon} size={35} />
      <p className="d-flex align-items-center d-sm-block day-temp">
        <span className="day-temp-min">{Math.round(props.data.temp.min)}°</span>
        <span className="day-temp-max">{Math.round(props.data.temp.max)}°</span>
      </p>
    </div>
  );
}

export default ForecastDay;
