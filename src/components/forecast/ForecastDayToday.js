import React from "react";

import Icon from "../Icon";

import "./ForecastDay.css";

function ForecastDayToday(props) {
  return (
    <div className="ForecastDayToday ForecastDay">
      <p className="day-today">{props.day}</p>
      <Icon code={props.data.weather[0].icon} size={35} />
      <p className="day-temp">
        <span className="day-temp-min">{Math.round(props.data.temp.min)}°</span>
        <span className="day-temp-max">{Math.round(props.data.temp.max)}°</span>
      </p>
    </div>
  );
}

export default ForecastDayToday;
