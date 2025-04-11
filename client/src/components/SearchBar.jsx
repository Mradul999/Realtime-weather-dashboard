import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      alert("Please enter city name");
      return;
    }
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex  mx-auto items-center justify-center gap-2 pt-8"
    >
      <input
        type="text"
        value={city}
        onChange={cityChangeHandler}
        placeholder="Enter City"
        className="w-full max-w-2xl px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
