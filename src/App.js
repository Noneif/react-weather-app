import React from "react";

import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <FirstRow />
            <SecondRow />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
