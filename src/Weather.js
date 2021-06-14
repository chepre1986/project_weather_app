import React, { useState } from "react";
import axios from "axios";


export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  function handleTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=43d32fe7ea32cc95d3a7dc0cc1b76066&units=metric`;
  axios.get(url).then(handleTemperature);
  if (temperature) {
    return (
      <div>
        <ul>
          <li>
            The temperature in {props.city} is {Math.round(temperature)}°C
          </li>
          <li>Descritpion: {description} </li>
          <li>Humidity: {humidity}% </li>
          <li>Wind: {wind}km/h </li>
          <li>
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={"clear"}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return <h1>  Loading... </h1>;
  }
}
