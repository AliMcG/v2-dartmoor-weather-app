import React, { useState } from "react"
import BarChart from "./BarChart"

export default function Display({day0}) {
  
  // Uses an array of the days of the week to return the day of the week
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[new Date(day0[0]?.dt * 1000).getDay()];
  // console.log(day)

  // This returns the the number of current day in the moth = i.e 14
  // const date = new Date(day0[0].dt * 1000).getDate()
  

  const [tempData, setTempData] = useState(
    {labels: day0.map((day) => `${new Date(day.dt * 1000).getHours()}:00`),
    datasets: [
    {
      label: `Temperture`,
      data: day0.map((day) => day.main.temp),
      backgroundColor: [
        'rgba(127, 175, 219, 1)'],
      borderWidth: 1
    }]}
  )

  // map or filter through day0 to find the highest
  // map through the icons and return the most common value.
  function mostFreqStr(arr) {
    var obj = {}, mostFreq = 0, which = [];

    arr.forEach(ea => {
      if (!obj[ea]) {
        obj[ea] = 1;
      } else {
        obj[ea]++;
      }

      if (obj[ea] > mostFreq) {
        mostFreq = obj[ea];
        which = [ea];
      } else if (obj[ea] === mostFreq) {
        which.push(ea);
      }
    });

    return which;
  }
  
  const iconList = day0.map((day) => day.weather[0].icon)
  const description = day0[0]?.weather[0].description

  const icon = mostFreqStr(iconList)
  // console.log(icon)

  const tempCheck = day0.map((day) => day.main.temp_max)
  const maxTemp = Math.round(Math.max(...tempCheck))
  

  return (
    <div className="day-card">
      <img src={`https://openweathermap.org/img/wn/${icon[0]}@2x.png`} alt="icon" />
      <p>{description}</p>
      <BarChart ChartData={tempData} />
      <p>Max Temperature: {maxTemp}°C</p>
      <p>{day}</p>
    </div>
  );
}