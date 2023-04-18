import React from "react";

import Icon from "../Icon";

import "./ForecastHour.css";

function ForecastHourNow(props) {
  return (
    <div className="ForecastHourNow ForecastHour">
      <p className="hour-now">{props.hour}</p>
      <Icon code={props.data.weather[0].icon} size={35} />
      <p className="cur-day-temp">{Math.round(props.data.temp)}°</p>
    </div>
  );
}

export default ForecastHourNow;
