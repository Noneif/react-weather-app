import React, { useState } from "react";
import $ from "jquery";

function ConvertTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertCelsius(event) {
    event.preventDefault();
    setUnit("celsius");

    $(".day-temp-min, .day-temp-max, .cur-day-temp").html(function () {
      let htmlString = $(this).html();
      htmlString = Number.parseInt(htmlString, 10);
      return `${Math.round(((htmlString - 32) * 5) / 9)}°`;
    });
  }

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");

    $(".day-temp-min, .day-temp-max, .cur-day-temp").html(function () {
      let htmlString = $(this).html();
      htmlString = Number.parseInt(htmlString, 10);
      return `${Math.round((htmlString * 9) / 5 + 32)}°`;
    });
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="align-midle cur-num">{Math.round(props.celsius)}</span>
        <span className="align-top unit">° C</span>
        <span className="align-top vertical-slash">|</span>
        <a href="/" className="align-top temp-sign" onClick={convertFahrenheit}>
          ° F
        </a>
      </span>
    );
  } else {
    return (
      <span>
        <span className="align-midle cur-num">{Math.round(fahrenheit())}</span>
        <a href="/" className="align-top temp-sign" onClick={convertCelsius}>
          ° C
        </a>
        <span className="align-top vertical-slash">|</span>
        <span className="align-top unit">° F</span>
      </span>
    );
  }
}

export default ConvertTemp;
