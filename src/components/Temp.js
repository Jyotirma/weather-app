import React from 'react'
import {iconUrl } from './weather/WeatherInfo'

import {
    UilTemperature,
    UilTear,
    UilWind,
    UilArrowUp,
    UilArrowDown 
} from "@iconscout/react-unicons";
function Temp({weather:{
    details, icon, temp, temp_min, temp_max, speed, humidity, feels_like, name, country
}}) {
    return (
        <>
            <div className="flex items-center justify-center my-3">
        <p className="text-white text-2xl font-medium">{`${name},${country}`}</p>
      </div>
            <div className="flex items-center justify-center py-6 text-xl text-red-100">
                <p>{details}</p>
            </div>
            <div className=" flex flex-row items-center justify-between py-1 sm:py-3 text-white">
                <img src={iconUrl(icon)} alt ={details}className="sm:w-20 w-10" />
                <p className="  text-5xl">{temp.toFixed()}°</p>
                <div className="flex flex-col space-y-2 ">
                    <div className="flex font-light text-sm items-center justify-center"> <UilTemperature size={18} className="mr-1" />
                        Real fell:
                        <span className="font-medium ml-1">{feels_like.toFixed()}°</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center"> <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">{speed.toFixed()}km/h</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center"> <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{humidity.toFixed()}%</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilArrowUp  />
                <p className="font-light">High:<span className="font-medium ml-1">{temp_max.toFixed()}°</span></p>
                <p className="font-light">|</p>
                <UilArrowDown  />
                <p className="font-light">Low:<span className="font-medium ml-1">{temp_min.toFixed()}°</span></p>
            </div>

        </>
    )
}

export default Temp
