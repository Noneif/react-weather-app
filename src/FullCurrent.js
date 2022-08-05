import React from "react";

import "./FullCurrent.css";

function FullCurrent(props) {
  return (
    <div className="col-4 FullCurrent">
      <div class="full-current">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="weather"
          className="icon"
        />
        <span className="align-middle cur-num">{props.number}</span>
        <a href="/" className="align-top temp-sign">
          °C
        </a>
        <span className="align-top vertical-slash">|</span>
        <a href="/" className="align-top temp-sign">
          °F
        </a>
      </div>
    </div>
  );
}

export default FullCurrent;
