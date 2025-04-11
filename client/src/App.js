import React, { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import axios from "axios";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  console.log("weatherData=>", weatherData);
  const handleSearch = async (city) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/weather?city=${city}`
      );

      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 404) {
          alert("Invalid City Name");
        } else {
          alert("Some error occurred please try again later");
        }
      }
    }
  };
  return (
    <div className="min-h-screen  bg-blue-200 p-6  ">
      <h1 className=" text-3xl font-bold  text-center text-blue-800">
        Weather Dashboard
      </h1>
      <div className="max-w-2xl mx-auto ">
        <SearchBar onSearch={handleSearch} />
        {weatherData && <WeatherCard weather={weatherData} />}
      </div>
    </div>
  );
};

export default App;
