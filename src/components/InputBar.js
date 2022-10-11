import React from "react";

function Input({ handleChange, location, getWeather }) {

  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        onChange={handleChange}
        placeholder="Location name"
        value={location}
      
      ></input>
      <button className="button" onClick={getWeather} >Get the Weather</button>
    </div>
  );
}

export default Input;