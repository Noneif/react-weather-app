import React from "react";

import TimeUpdate from "./TimeUpdate";
import SearchCity from "./SearchCity";

function FistRow() {
  return (
    <div className="row mb-1 FistRow">
      <TimeUpdate value="Wednesday 16:41" />
      <SearchCity />
    </div>
  );
}

export default FistRow;
