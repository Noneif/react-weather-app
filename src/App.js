import React from "react";

import SearchEngine from "./components/current-charact/SearchEngine";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <SearchEngine defaultCity={"Amsterdam"} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
