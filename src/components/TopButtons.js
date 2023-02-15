import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id:1,
            title: 'Delhi'
        },
        {
            id:2,
            title: 'Paris'
        },
        {
            id:3,
            title: 'Tokyo'
        },
        {
            id:4,
            title: 'Bhubaneswar'
        }
    ]
  return (
    <div className= "flex items-center justify-around my-6 px-2 sm:px-4">
        {cities.map((city)=>{
            return <button key={city.id} className="text-white text-lg font-medium px-1" onClick={() => setQuery(city.title)}>{city.title}</button>
        })}
    </div>
  )
}

export default TopButtons
