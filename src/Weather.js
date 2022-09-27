import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const key = "aaf70afa131000ddc65b8f5fa5abad8d";
  let urlLink = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
  let [temperature, setTemperature] = useState(null);
  let message;
  function showWeather(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  axios.get(urlLink).then(showWeather);

  if (temperature) {
    message = `The temperature in ${props.city} is ${temperature}°C`;
  } else {
    message = `Weather forecast for ${props.city} is loading...`;
  }

  return <div className="Weather">{message}</div>;
}
