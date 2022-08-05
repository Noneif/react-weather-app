import React from "react";

import "./TimeUpdate.css";

function TimeUpdate(props) {
  return (
    <div className="col-4 TimeUpdate">
      <div className="date">
        <p>Last update:</p>
        <p>{props.value}</p>
      </div>
    </div>
  );
}

export default TimeUpdate;
