import React from "react";

import "./City.css";

function City(props) {
  return (
    <div className=" col-4 City">
      <div className="city">{props.name}</div>
    </div>
  );
}

export default City;
