import React from 'react';

function TopButtons({ setQuery }) {
  const cities = [
    { id: 1, title: 'London' },
    { id: 2, title: 'New York' },
    { id: 3, title: 'Tokyo' },
    { id: 4, title: 'Paris' },
    { id: 5, title: 'Los Angeles' },
  ];

  return (
    <div className='flex items-center justify-around my-6 bg-white rounded-md p-4 shadow-md'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='bg-white text-custom-purple font-medium py-2 px-4 rounded transition ease-out hover:scale-105 hover:bg-custom-purple hover:text-white text-3xl'
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
