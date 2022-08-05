import React from "react";

import City from "./City";
import FullCurrent from "./FullCurrent";
import OtherCharact from "./OtherCharact";

function SecondRow() {
  return (
    <div className="row mb-5 cur_temp-serch SecondRow">
      <City name="Emmen" />
      <FullCurrent number={22} />
      <OtherCharact general="Scattered clouds" humidity={75} wind={11} />
    </div>
  );
}

export default SecondRow;
