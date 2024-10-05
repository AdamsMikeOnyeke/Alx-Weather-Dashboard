import React from 'react'
import { FaThermometerEmpty } from 'react-icons/fa'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FiWind } from 'react-icons/fi'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

function TempAndDetails({ weather: { details, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like }, units }) {
  const verticalDetails = [
    { id: 1, Icon: FaThermometerEmpty, title: 'Real Feel', value: `${feels_like.toFixed()}°` },
    { id: 2, Icon: BiSolidDropletHalf, title: 'Humidity', value: `${humidity.toFixed()}%` },
    { id: 3, Icon: FiWind, title: 'Wind', value: `${speed.toFixed()} ${units === 'metric' ? 'km/h' : 'm/s'}` }
  ]

  const horizontalDetails = [
    { id: 1, Icon: GiSunrise, title: 'Sunrise', value: sunrise },
    { id: 2, Icon: GiSunset, title: 'Sunset', value: sunset },
    { id: 3, Icon: MdKeyboardArrowUp, title: 'High', value: `${temp_max.toFixed()}°` },
    { id: 4, Icon: MdKeyboardArrowDown, title: 'Low', value: `${temp_min.toFixed()}°` }
  ]

  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg border border-white border-opacity-20 p-5">
      <div className='flex items-center justify-center py-6 text-3xl text-custom-purple font-bold'>
        <p>{details}</p>
      </div>
      <div className='flex flex-row items-center justify-between py-3'>
        <img src={icon} alt="weather icon" className='w-35' />
        <p className='text-7xl text-custom-black font-bold text-center '>{`${temp.toFixed()}°`}</p>
        <div className='flex flex-col space-y-3 items-start text-custom-black font-bold'>
          {verticalDetails.map(({ id, Icon, title, value }) => (
            <div key={id} className='flex font-light text-2xl items-center'>
              <Icon size={35} className='mr-1' />
              {`${title}:`} <span className='font-medium ml-1 text-1xl'>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center space-x-10 text-sm py-3 px-12 text-white'>
        {horizontalDetails.map(({ id, Icon, title, value }) => (
          <div key={id} className='flex flex-row items-center text-2xl'>
            <Icon size={35} />
            <p className='font-light ml-1'>{`${title}:`} <span className='font-medium ml-1'>{value}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TempAndDetails
