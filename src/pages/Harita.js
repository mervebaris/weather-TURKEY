import React, { useState, useEffect } from "react";
import TurkeyMap from "turkey-map-react";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

// api key
const APIkey = "bcf2048bc3be154bded8f277f580ba2e";

const Harita = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [data, setData] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

  const searchLocation = (cityData) => {
    setLocation(cityData.name);
    navigate(`/detay/${cityData.plateNumber}`, {state: {name:cityData.name, plaka:cityData.plateNumber}});
    //alert(cityData.plateNumber);
  };

  const renderCity = (cityComponent, cityData) => (
    <Tooltip title={cityData.name} key={cityData.id}>
      {cityComponent}
    </Tooltip>
  );


  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    
  }, []);

  return (
    <div className='w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center'>
      <div className="w-screen  mx-auto">
        <h1 className="text-white text-6xl text-center">Turkey Weather</h1>
        <TurkeyMap
          showTooltip={renderCity}
          onClick={searchLocation}
          customStyle={{ idleColor: "#1ab8ed", hoverColor: "pink" }}
        />
      </div>
      </div>
  );
};

export default Harita;
