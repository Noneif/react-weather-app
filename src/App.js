import React, { useState } from "react";
import axios from "axios";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

import "./App.css";

function App() {
  const [city, setCity] = useState(null);
  function currentCity(response) {
    setCity(response.data.name);
  }
  console.log(city);
  function currentPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let apiKey = `94acf2da0785bb3e4d1e3cb839ee7521`;
    let units = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?`;
    let apiUrl = `${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(currentCity);
  }

  navigator.geolocation.getCurrentPosition(currentPosition);

  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <SearchEngine defaultCity={city} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
