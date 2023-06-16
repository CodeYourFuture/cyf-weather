import React, { useState } from "react";
import "./Header.scss";

const Header = ({getNewLocation}) => {
  const [city, setCity] = useState("");
console.log({ city });

  return (
    <header className="header">
      <input
        className="Location"
        
        placeholder="Type in a city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="button" onClick={() => getNewLocation(city)}>
        Find Weather
      </button>
    </header>
  );
   
}; 

export default Header;
