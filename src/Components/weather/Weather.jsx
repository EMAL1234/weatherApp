import React from 'react'
import "./weather.css"
import Search from "../Assets/search.png"
//import clear from "../Assets/clear.png"
const Weather = () => {
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput"  placeholder='Search'/>
            <div className="search">
                <img src={Search} alt="" />
            </div>
        </div>
      
    </div>
  )
}

export default Weather
