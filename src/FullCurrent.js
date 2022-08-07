import React from "react";

import "./FullCurrent.css";

function FullCurrent(props) {
  return (
    <div className="col-12 col-sm-4 text-center text-sm-start FullCurrent">
      <div class="full-current">
        <img src={props.icon} alt={props.alt} className="icon" />
        <span className="align-middle cur-num">{Math.round(props.temp)}</span>
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
