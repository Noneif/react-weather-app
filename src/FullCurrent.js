import React from "react";

import Icon from "./Icon";
import ConvertTemp from "./ConvertTemp";

import "./FullCurrent.css";

function FullCurrent(props) {
  return (
    <div className="col-12 col-sm-4 text-center text-sm-start FullCurrent">
      <Icon code={props.icon} />
      <ConvertTemp celsius={props.temp} />
    </div>
  );
}

export default FullCurrent;
