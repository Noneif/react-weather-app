import React, { useState } from "react";

function ConvertTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="align-midle cur-num">{Math.round(props.celsius)}</span>
        <span className="align-top unit">°C</span>
        <span className="align-top vertical-slash">|</span>
        <a href="/" className="align-top temp-sign" onClick={convertFahrenheit}>
          °F
        </a>
      </span>
    );
  } else {
    return (
      <span>
        <span className="align-midle cur-num">{Math.round(fahrenheit())}</span>
        <a href="/" className="align-top temp-sign" onClick={convertCelsius}>
          °C
        </a>
        <span className="align-top vertical-slash">|</span>
        <span className="align-top unit">°F</span>
      </span>
    );
  }
}

export default ConvertTemp;
