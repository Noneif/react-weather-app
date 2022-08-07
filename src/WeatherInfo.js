import React from "react";

import City from "./City";
import FullCurrent from "./FullCurrent";
import OtherCharact from "./OtherCharact";

function WeatherInfo(props) {
  return (
    <div className="row mb-5 d-flex align-items-center cur_temp-serch SecondRow">
      <City name={props.data.name} />
      <FullCurrent
        temp={props.data.temperature}
        icon={props.data.icon}
        alt={props.data.description}
      />
      <OtherCharact
        general={props.data.description}
        humidity={props.data.humidity}
        wind={props.data.wind}
      />
    </div>
  );
}

export default WeatherInfo;
