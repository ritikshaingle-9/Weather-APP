import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  return (
    <div>
      const API_KEYS="44f75821f5b433f0de19a4ef400268f3"
      const [city,setcity] = useState("");
      const [weather, setWeather] = useState({
      temp:null,
      humidity: null,
      visibility: null,
      minTemp: null,
      maxTemp: null,
      feelsLike: null
      });
      const getWeatherData =(()=>{}); 

      useEffect(()=>{ 
      getWeatherData();
      }, [city]);


      <div className="bg-blue-300 w-full h-[700px]">
       <h1 className="text-center text-5xl pt-20">Weather App</h1>
       <input type="text" 
              className="bg-white w-200 block mx-auto h-14 mt-9 focus:outline-none rounded-4xl text-3xl text-center border-2 border-blue-400"
              value={city}
              onChange={(e)=> setcity(e.target.value)}/>
      </div>
    </div>
  );
}



 