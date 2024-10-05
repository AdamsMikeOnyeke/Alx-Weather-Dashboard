import { useState, useEffect } from 'react'
import './App.css'
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TempAndDetails from './components/TempAndDetails'
import Forecast from './components/Forecast'
import getFormattedWeatherData from './services/weatherServices'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [query, setQuery] = useState({ q: 'london' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'current location'
    toast.info(`Fetching weather data for ${cityName}`)

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`)
      setWeather(data)
    })
  }

  useEffect(() => {
    getWeather()
  }, [query, units])

  const formatBackground = () => {
    // if (!weather) return 'from-cyan-600 to-blue-700'
    // const threshold = units === 'metric' ? 20 : 60
    // if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700'
    // return 'from-yellow-600 to-orange-700'
    return 'bg-black'
  }

  return (
    <div className={`mx-auto max-w-screen-xl mt-10 py-8 px-12 bg-gradient-to-br ${formatBackground()} shadow-lg rounded-lg`}>
      <h1 className="text-white text-4xl text-center font-bold">Weather API Dashboard</h1>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TempAndDetails weather={weather} units={units} />
          <Forecast title='3 Hour Step Forecast' data={weather.hourly} />
          <Forecast title='Daily Forecast' data={weather.daily} />
        </>
      )}

      <ToastContainer autoClose={2500} hideProgressBar={true} theme='colored' className='text-2xl'/>
    </div>
  )
}

export default App
