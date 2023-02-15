import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopButtons from './components/TopButtons'
import Input from './components/Input'
import Temp from './components/Temp'
import getWeatherData from './components/weather/WeatherInfo'

function App() {
  const [query, setQuery] = useState('tokyo')
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(()=>{
    const fetchWeather = async()=>{
      toast.info("Fetching weather for "+ query)
      await getWeatherData(query, units ).then(
        (data)=>{
          toast.success("Successfully Fetched weather for "+ query)
          
          setWeather(data);
        } );
      
    };
    fetchWeather();
  }, [query, units]);

  const formatBg = ()=>{
    if(!weather) return "from-cyan-700 to to-blue-700";
    const range = units==="metric" ? 20 : 60
    if(weather.temp <= range) return "from-cyan-500 to to-sky-800"

    return "from-yellow-500 to-orange-500"
  }

  return (
    <div className= {`mx-auto my-auto h-fit max-w-5xl sm:max-w-screen-md mt-2 sm:mt-6 py-5 px-12 sm:px-22 bg-gradient-to-r from-cyan-700 to to-blue-700 shadow-xl shadow-gray-400 ${formatBg()}`}>
      
      <TopButtons setQuery={setQuery}/>
      <Input setQuery={setQuery} setUnits={setUnits}/>
      {weather && (
        <>
        <Temp weather = {weather}/>
        </>
      )
      }

      <ToastContainer 
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="colored"/>
    </div>
  )
}

export default App

 