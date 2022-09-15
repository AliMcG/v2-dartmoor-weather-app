import React, { useState } from "react";
// import data from "../Data/testWeatherData";
import Display from "./Display";
import Input from "./InputBar";
import Title from "./Title";
import "./App.css";

function App() {
  const [day0, setDay0] = useState("");
  const [day1, setDay1] = useState("");
  const [day2, setDay2] = useState("");
  const [day3, setDay3] = useState("");
  const [day4, setDay4] = useState("");
  const [location, setLocation] = useState("");

  async function getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    const today = new Date().getDate();

    setDay0(
      data.list.filter((object) => {
        if (new Date(object.dt * 1000).getDate() === today) {
          return object.dt;
        } else {
          return false;
        }
      })
    );
    

    setDay1(
      data.list.filter((object) => {
        if (new Date(object.dt * 1000).getDate() === today + 1) {
          return object.dt;
        } else {
          return false;
        }
      })
    );

    setDay2(
      data.list.filter((object) => {
        if (new Date(object.dt * 1000).getDate() === today + 2) {
          return object.dt;
        } else {
          return false;
        }
      })
    );

    setDay3(
      data.list.filter((object) => {
        if (new Date(object.dt * 1000).getDate() === today + 3) {
          return object.dt;
        } else {
          return false;
        }
      })
    );

    setDay4(
      data.list.filter((object) => {
        if (new Date(object.dt * 1000).getDate() === today + 4) {
          return object.dt;
        } else {
          return false;
        }
      })
    );
  }

  function onChange(e) {
    setLocation(e.target.value);
  }

  return (
    <div className="App">
      <div className="bg">
        <Input
          handleChange={onChange}
          location={location}
          getWeather={getWeather}
        />
        {location ? (
          <Title text={location} />
        ) : (
          <Title text="Choose a location" />
        )}
        <div className="card-container">
          {day0 && <Display day0={day0} />}
          {day1 && <Display day0={day1} />}
          {day2 && <Display day0={day2} />}
          {day3 && <Display day0={day3} />}
          {day4 && <Display day0={day4} />}
        </div>
      </div>
    </div>
  );
}

export default App;
