//Weather app
import React from 'react'
import "./weather.css"
import Search from "../Assets/search.png"
import Cloud from "../Assets/cloud.png"
import Humidity from "../Assets/humidity.png"
import Wind from "../Assets/wind.png"
// import clear from "../Assets/clear.png"
const Weather = () => {
    let api_key="dd94f859a0e52d6e4767fddf735f04a7"
    const search = async ()=>{ 
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
           return 0;
        }
        let url =`http://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
        let response= await fetch(url)
        let data= await response.json()
        const humidity=document.getElementsByClassName("humidity-percent")
        const wind=document.getElementsByClassName("wind-rate")
        const temp=document.getElementsByClassName("weather-temp")
        const location=document.getElementsByClassName("weather-loc")

        humidity[0].innerHTML= data.main.humidity + "%";
        wind[0].innerHTML=data.wind.speed+"km/hr"
        temp[0].innerHTML=data.main.temp+'&deg' +"C"
        location[0].innerHTML=data.name

    }   
  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="cityInput"  placeholder='Search'/>
            <div className="search" onClick={()=>{
                search()
            }}>
                <img src= {Search} alt="" />
            </div>
        </div>
        <div className="weather-image">
            <img src={Cloud} alt="" />
        </div>
      <div className="weather-temp">24c</div>
      <div className="weather-loc">London</div>
      <div className="data-container">
        <div className="elemant">
            <img src={Humidity} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="elemant">
            <img src={Wind} alt="" className="icon" />
            <div className="data">
                <div className="wind-rate">18km/hr</div>
                <div className="text">Windspeed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
