import React from "react";

import "./TimeUpdate.css";

function TimeUpdate(props) {
  return (
    <div className="col-sm-4 mb-2 mb-sm-0 text-center text-sm-start TimeUpdate">
      <div className="date">
        <p>Last update: {props.value}</p>
      </div>
    </div>
  );
}

export default TimeUpdate;
