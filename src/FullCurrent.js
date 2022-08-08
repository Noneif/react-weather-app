import React from "react";

import Icon from "./Icon";
import ConvertTemp from "./ConvertTemp";

import "./FullCurrent.css";

function FullCurrent(props) {
  return (
    <div className="col-12 col-md-4 text-center text-md-start FullCurrent">
      <Icon code={props.icon} />
      <ConvertTemp celsius={props.temp} />
    </div>
  );
}

export default FullCurrent;
