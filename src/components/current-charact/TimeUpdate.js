import React from "react";

import "./TimeUpdate.css";

function TimeUpdate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.value.getDay()];

  let hours = props.value.getHours();
  if (hours < 10) hours = `0${hours}`;

  let minutes = props.value.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;

  return (
    <div className="col-sm-4 mb-2 mb-sm-0 text-center text-sm-start TimeUpdate">
      Last update: {day} {hours}:{minutes}
    </div>
  );
}

export default TimeUpdate;
