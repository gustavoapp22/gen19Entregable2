import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import Emoji from './Emoji'
import Counter from './components/Counter'

function App() {

  const [ rap, setRap ] = useState({});

  const [data,setData] = useState (true);

  useEffect(() => {

    const red = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      
          axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2cd3b390e5024e82793139b25c3639c7`)
          .then(res => setRap(res.data));
        }
        navigator.geolocation.getCurrentPosition(red)



  }, [])

 const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"];
 const floor = Math.floor(Math.random() * colors.length )
 document.body.style = `background: ${colors[floor]}`;

console.log(rap);
  return (
    <div className="App">
      <div className='hey'>

      <h2>Wheather App</h2>
     <h4>{rap.name} {rap.sys?.country}</h4>
     <img src={`http://openweathermap.org/img/wn/${rap.weather?.[0].icon}@2x.png`} alt="" />
     <div>{rap ? " 24°C"  : "16°F"} </div>
     <h1>{rap.weather?.[0].description}</h1>
     <h1>wind speed:{rap.wind?.speed} m/s</h1>
     <h1>Clouds:{rap.clouds?.all}%</h1>
     <h1>Pressure{rap.main?.pressure} mb</h1>
     <button onClick={() => setRap(!rap)}>Degress °F/°C</button>
    </div>

      </div>
  )
}

export default App
