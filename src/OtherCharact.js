import React from "react";

import "./OtherCharact.css";

function OtherCharact(props) {
  return (
    <div className="col-12 col-md-4 text-center text-md-start OtherCharact">
      <div className="other-temp-character">
        <p className="general-current-status">{props.general}</p>
        <p>
          Humidity:<span className="humidity">{props.humidity}</span>%
        </p>
        <p>
          Wind:
          <span className="wind-speed">{Math.round(props.wind * 3.6)}</span>km/h
        </p>
      </div>
    </div>
  );
}

export default OtherCharact;
