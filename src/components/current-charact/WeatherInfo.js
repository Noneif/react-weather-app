import React from "react";

import Icon from "../Icon";
import ConvertTemp from "../ConvertTemp";
import WeatherForecast from "../forecast/WeatherForecast";

import "./WeatherInfo.css";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mb-5 d-flex align-items-center cur_temp-serch">
        <div className=" col-12 text-center City">
          {props.data.name}, {props.data.country}
        </div>
        <div className="col-12 text-center FullCurrent">
          <Icon code={props.data.icon} size={45} />
          <ConvertTemp celsius={props.data.temperature} />
        </div>
        <div className="col-12 text-center OtherCharact">
          <p className="general-current-status">{props.data.description}</p>
          <p>
            Humidity:<span className="humidity">{props.data.humidity}</span>%
          </p>
          <p>
            Wind:
            <span className="wind-speed">
              {Math.round(props.data.wind * 3.6)}
            </span>
            km/h
          </p>
        </div>
      </div>
      <WeatherForecast icon={props.data.icon} coord={props.data.coord} />
    </div>
  );
}

export default WeatherInfo;
