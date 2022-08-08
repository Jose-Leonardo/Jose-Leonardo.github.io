import { useState, useEffect } from 'react'

import './App.css'
import CardUserd from './assets/Componens/CardUserd'

function App() {
  const [coords, setcoords] = useState()
  
  useEffect(() => {

    const success = pos => {
        const latlon = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
      }
      setcoords(latlon)
    }
   
    navigator.geolocation.getCurrentPosition(success)
  },[])
  return (
    <div className="App">
      <CardUserd lon={coords?.lon} lat={coords?.lat}/>
    </div>
  )
}

export default App
