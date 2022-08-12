import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function Icon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "PARTLY_CLOUDY_DAY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  const codeColor = {
    "01d": "#fcff89",
    "01n": "#fcff89",
    "02d": "#ca9dd7",
    "02n": "#ca9dd7",
    "03d": "#ca9dd7",
    "03n": "#ca9dd7",
    "04d": "#ca9dd7",
    "04n": "#ca9dd7",
    "09d": "#7effdb",
    "09n": "#7effdb",
    "10d": "#7effdb",
    "10n": "#7effdb",
    "11d": "#7effdb",
    "11n": "#7effdb",
    "13d": "#fcff89",
    "13n": "#fcff89",
    "50d": "#ca9dd7",
    "50n": "#ca9dd7",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={codeColor[props.code]}
      size={props.size}
      animate={true}
    />
  );
}

export default Icon;
