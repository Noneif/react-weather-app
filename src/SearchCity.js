import React from "react";
import "./SearchCity.css";

function SearchCity() {
  return (
    <div className="col-sm-8 SearchCity">
      <form>
        <div className="input-group mb-0 box">
          <span className="input-group-text">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            className="form-control"
            type="text"
            name="city"
            placeholder="city"
            id="form-control"
            autoComplete="off"
            autoFocus="on"
          />
          <button type="submit" className="btn btn-primary blue">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchCity;
