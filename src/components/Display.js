import React, { useState } from "react"
import BarChart from "./BarChart"

export default function Display({day0}) {
  console.log(day0)
  // Uses an array of the days of the week to return the day of the week
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[new Date(day0[0].dt * 1000).getDay()];
  console.log(day)

  // This returns the the number of current day in the moth = i.e 14
  // const date = new Date(day0[0].dt * 1000).getDate()
  

  const [tempData, setTempData] = useState(
    {labels: day0.map((day) => new Date(day.dt * 1000).getHours()),
    datasets: [
    {
      label: `${day}`,
      data: day0.map((day) => day.main.temp),
      backgroundColor: [
        'rgba(127, 175, 219, 1)'],
      borderWidth: 1
    }]}
  )

  

  // this only returns the data for the [0] in the array - so the 1st info for the day.
  const icon = day0[0].weather[0].icon
  const description = day0[0].weather[0].description
  const tempCheck = day0.map((day) => day.main.temp_max)
  const maxTemp = Math.round(Math.max(...tempCheck))
  // date_text, temp, icon, description

  return (
    <div className="day-card">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
      <p>{description}</p>
      <BarChart ChartData={tempData} />
      <p>Max Temperture: {maxTemp}°C</p>
    </div>
  );
}