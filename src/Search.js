import React, { useState } from "react";
import Weather from "./Weather";

export default function Search3() {
  let [city, setCity] = useState("Paris");
  let [newText, setnewText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    if (city.length > 0) {
      setnewText(<Weather city={city} />);
    } else {
      setnewText(<h3>Please, enter the city name</h3>);
    }
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="City name" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h3>{newText}</h3>
    </div>
  );
}
