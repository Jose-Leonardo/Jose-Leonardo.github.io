import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"
const CardUserd = ({lon, lat}) => {
    
    const [coords, setcoords] = useState()
    const [click, setclick] = useState(true)
  useEffect(() => {
    if (lon) {
        const Api = "c1b0763e41d4df73025d8cea74d62866"
        const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api}`

        axios.get(URL)
        .then(res => setcoords(res.data))
        .catch()
    }
 
   },[lat, lon])

   const grados = coords?.main.temp - 273.15
   const fahrenheit = ( grados * 9/5) + 32
  return (
    <div className='Clima'>
        <h3>`{coords?.name} {coords?.sys.country}` </h3>
        <article>
        <div className='parte1'>
            <img src={`http://openweathermap.org/img/wn/${coords?.weather[0].icon}@4x.png`} alt="" />
            {
                click 
                ? <span><b>Temperatura</b> {Math.round(grados)} °c</span>
                : <span><b>Temperatura</b> {Math.round(fahrenheit)}°f </span>
            }
        </div>
        <div className='parte1'>
             <span><b>Clima </b>{coords?.weather[0].description}</span>
             <span><b>Horario </b>{coords?.timezone}</span>
             <span><b>longitud </b>{coords?.coord.lon}</span>
             <span><b>latitud </b>{coords?.coord.lat}</span>
        </div>
        </article>
        <div className="btn">
            <button onClick={() => setclick(!click)} >
                Grados F/C
            </button>
        </div>
        
       
    </div>
  )
}

export default CardUserd