import React from "react";

import City from "./City";
import FullCurrent from "./FullCurrent";
import OtherCharact from "./OtherCharact";

function SecondRow() {
  return (
    <div className="row mb-5 d-flex align-items-center cur_temp-serch SecondRow">
      <City name="Santa Monica" />
      <FullCurrent number={22} />
      <OtherCharact general="Scattered clouds" humidity={75} wind={11} />
    </div>
  );
}

export default SecondRow;
