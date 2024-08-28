import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // sets initial state of city to be updated
  const [city, setCity] = useState('');
  // sets initial state of weather data to be updated
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('/api/weather')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      {/* <h1>{message}</h1> */}
      <h1>Weather App</h1>
      <form>
          <input 
          type="text"
          placeholder="Enter city name"
          label="city-name"
          // sets initial state of city to be changed with user input
          value={city}
          />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  )
}

export default App;
