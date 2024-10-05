import React from 'react'

function Forecast({ title, data }) {
  return (
    <div className="mt-6">
      <h2 className="text-3xl font-semibold text-white ">{title}</h2>
      <hr className='my-1 border-gray-400' />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {data.map((d, index) => (
          <div key={index} className='flex flex-col items-center bg-white backdrop-blur-lg p-4 rounded-md shadow-md transition-transform transform hover:scale-105 bg-opacity-80'>
            <p className='font-bold text-3xl text-custom-black'>{d.title}</p>
            <img src={d.icon} alt="weather icon" className='w-22 my-1' />
            <p className='font-bold text-custom-black text-2xl'>{`${d.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
