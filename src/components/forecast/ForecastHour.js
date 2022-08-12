import React from "react";

import Icon from "../Icon";

import "./ForecastHour.css";

function ForecastHour(props) {
  let time = new Date(props.data.dt * 1000);
  let hour = time.getHours();
  if (hour < 10) hour = `0${hour}`;
  return (
    <div className="ForecastHour">
      <p className="hour">{hour}</p>
      <Icon code={props.data.weather[0].icon} size={35} />
      <p className="cur-day-temp">{Math.round(props.data.temp)}°</p>
    </div>
  );
}

export default ForecastHour;
