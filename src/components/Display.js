import React, { useState } from "react"
import BarChart from "./BarChart"

export default function Display({day0}) {

  // Uses an array of the days of the week to return the day of the week
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[new Date(day0[0].dt * 1000).getDay()];
  console.log(day)

  // This returns the the number of current day in the moth = i.e 14
  const date = new Date(day0[0].dt * 1000).getDate()
  

  const [tempData, setTempData] = useState(
    {labels: day0.map((day) => new Date(day.dt * 1000).getHours()),
    datasets: [
    {
      label: 'Dataset 1',
      data: day0.map((day) => day.main.temp),
      
    }]}
  )

  console.log(tempData)

  
  const icon = day0[0].weather[0].icon
  const description = day0[0].weather[0].description
  // date_text, temp, icon, description

  return (
    <div className="day-card">
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
   
      <BarChart ChartData={tempData} />
      <p>{day0[0].main.temp}</p>
      <p>{description}</p>
      <p>{day}</p>
    </div>
  );
}