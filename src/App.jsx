import React, { useEffect, useState } from 'react'
import weatherImage from "./assets/Weather-pana.png"
import WeatherDetail from "./WeatherDetail"
import axios from 'axios';

const kelvinToCelsius = (fehrenheit) =>{
  return ((fehrenheit-273.15).toFixed(2))
}

const App = () => {
  const API_KEY = "9efc92fba7e8bc6d9d915b83f2c60e9d"; 
  const [city, setCity] = useState("Pune")
  const [weather, setWeather] = useState({
    temp:30,
    visibility: 10,
    humidity: 50,
    minTemp:20,
    maxTemp: 40,
    feelsLike:32,
  })

  "https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_KEY}"
  const getWeatherData = async() => {
    const response =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    const weatherData = response.data;
    setWeather({
      temp: weatherData.main.temp,
      visibility: weatherData.visibility,
      humidity: weatherData.main.humidity,
      minTemp: weatherData.main.temp_min,
      maxTemp: weatherData.main.temp_max,
      feelsLike: weatherData.main.feels_like,
    })
  };

  useEffect(()=>{
    getWeatherData();
  }, [city])

  return (
    <div className='bg-blue-200 min-h-screen'>
        <img src={weatherImage} className='h-[300px] mx-auto'></img>
        <input 
            type='text' 
            value={city} 
            onChange={(e) => setCity(e.target.value)}
            placeholder='Search your city...'
            className='border-1 border-blue-400 p-2 w-1/2 bg-white mx-auto block text-3xl text-center focus:outline-none rounded-full'
        />

        <div className='bg-white opacity-80 p-4 mt-4 w-1/2 mx-auto rounded-lg text-2xl'>
          <WeatherDetail 
            detail="Temparature" 
            value={`${kelvinToCelsius(weather.temp)} °C`}
          />

          <WeatherDetail 
            detail="Feels Like" 
            value={`${kelvinToCelsius(weather.feelsLike)} °C`}
          />

          <WeatherDetail 
            detail="Min Temp" 
            value={`${kelvinToCelsius(weather.minTemp)} °C`}
          />

          <WeatherDetail 
            detail="Max Temp" 
            value={`${kelvinToCelsius(weather.maxTemp)} °C`}
          />

          <WeatherDetail detail="Visiblity" value={`${weather.visibility} Miles`}/>

          <WeatherDetail detail="Humidity" value={`${weather.humidity} %`}/>
        </div>
    </div>
  )
}

export default App