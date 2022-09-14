import React, { useState } from "react"
import data from "../Data/testWeatherData"
import Display from "./Display";
import './App.css';

function App() {
  const [day0, setDay0] = useState("")

  function weatherTest(){
    const today = new Date().getDate()
    console.log(today)

    setDay0(data.list.filter((object) => {
        if (new Date(object.dt * 1000).getDate() === today){
          return object.dt
         } else  {
          return false
         }
    }))
    console.log(day0)
  }
  // console.log(data.list)

  return (
    <div className="App">
      <button onClick={weatherTest}>Check weather data</button>
      {day0 && <Display day0={day0} />}
    </div>
  );
}

export default App;
