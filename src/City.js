import React from "react";

import "./City.css";

function City(props) {
  return (
    <div className=" col-12 col-md-4 text-center text-md-start City">
      <div className="city">{props.name}</div>
    </div>
  );
}

export default City;
