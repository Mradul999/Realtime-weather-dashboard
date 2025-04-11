import React from "react";

const WeatherCard = ({ weather }) => {
  const { city, wind, temperature, condition, icon, humidity } = weather;
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-blue-200 to-blue-400 text-gray-900 shadow-xl  rounded-3xl p-6 mt-10">
      <div className="flex items-center  justify-between">
        <div>
          <h2 className=" text-3xl font-bold">{city}</h2>
          <p className="text-lg font-semibold capitalize">{condition}</p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="image"
          className="w-52 "
        />
      </div>

      <div className="mt-2">
        <p className="text-xl ">
          {" "}
          wind:<span className="font-semibold">{wind}</span> m/s
        </p>
      </div>
      <div className="mt-2">
        <p className="text-xl ">
          {" "}
          Temperature:<span className="font-semibold">
            {temperature}
          </span> °C{" "}
        </p>
      </div>
      <div className="mt-2">
        <p className="text-xl ">
          {" "}
          humidity:<span className="font-semibold">{humidity}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
