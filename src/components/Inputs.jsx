import React, { useState } from 'react';
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';

function Inputs({ setQuery, setUnits }) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setQuery({ lat: latitude, lon: longitude });
      });
    } 
  };

  return (
    <div className='card flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-11'>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder='search by city...'
          className='text-gray-500 text-3xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase '
        />

        <BiSearch
          size={45}
          className='cursor-pointer transition ease-out hover:scale-125 text-black'
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={50}
          className='cursor-pointer transition ease-out hover:scale-125 text-black'
          onClick={handleLocationClick}
        />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button className='text-4xl font-medium transition ease-out hover:scale-125 text-black' onClick={() => setUnits('metric')}>
          °C
        </button>
        <p className='text-4xl font-medium ms-1 text-black'>|</p>
        <button className='text-4xl font-medium transition ease-out hover:scale-125 text-black' onClick={() => setUnits('imperial')}>
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
