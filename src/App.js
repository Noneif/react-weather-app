import React from "react";

import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <SearchEngine defaultCity="Emmen" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
