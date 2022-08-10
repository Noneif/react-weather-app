import React from "react";

import City from "./City";
import FullCurrent from "./FullCurrent";
import OtherCharact from "./OtherCharact";
import WeatherForecast from "./WeatherForecast";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mb-5 d-flex align-items-center cur_temp-serch">
        <City name={props.data.name} />
        <FullCurrent temp={props.data.temperature} icon={props.data.icon} />
        <OtherCharact
          general={props.data.description}
          humidity={props.data.humidity}
          wind={props.data.wind}
        />
      </div>
      <WeatherForecast icon={props.data.icon} coord={props.data.coord} />
    </div>
  );
}

export default WeatherInfo;
