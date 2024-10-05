import React from 'react';

function TimeAndLocation({ weather: { formattedLocalTime, name, country } }) {
  return (
    <div className='text-center'>
      <div className='flex items-center justify-center my-6'>
        <p className='text-2xl font-extralight'>{formattedLocalTime}</p>
      </div>

      <div className='text-4xl font-bold py-3'>
        {`${name}, ${country}`}
      </div>
    </div>
  );
}

export default TimeAndLocation;
