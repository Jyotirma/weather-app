import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
function Input({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) setQuery(city)
  }

  const handleUnits = (e) => {
    const selectedUnit = e.target.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  }

  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text" placeholder='Search'
          className="text-base sm:text-xl font-light p-1 w-1/2 sm:w-10/12 shadow-xl focus: outline-none capitalize placeholder:lowercase rounded text-center"
        />
        <UilSearch size={35} className="text-white px-1 cursor-pointer mr-1 transition ease-in-out hover:scale-125" onClick={handleSearch} />
      </div>
      <div className="flex flex-row w-1/5 items-center justify-center text-white">
        <button name='metric' className="text-xl mx-1 font-light transition ease-in-out hover:scale-125 " onClick={handleUnits}>°C</button> <p className="text-xl  mx-1">|</p>
        <button name='imperial' className="text-xl mx-1 font-light transition ease-in-out hover:scale-125" onClick={handleUnits}>°F</button>
      </div>
    </div>
  )
}

export default Input
