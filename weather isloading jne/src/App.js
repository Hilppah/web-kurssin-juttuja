import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';
import Weather from './Weather';

function App() {
const [lat, setLat] = useState(0);
const [lon, setLon] = useState(0);
const[isLoading, setLoading] =useState(true);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      setLoading(false);
    }, (error) => {
      alert(error);
      })
  }
  else {
    alert("Geolocation is not supported by this browser.");
  }
}, [])
 
  if (isLoading) {
    return <p>Loading...</p>;
  }
  else{
  return (
  <div>
    
      <h3> Your position is</h3>
    <p>
      position:  &nbsp;
      {lat.toFixed(3)} &nbsp;
      {lon.toFixed(3)}  
    </p>
    <Weather lat={lat} lon={lon}/>
    </div>
  );
  }
}

export default App;