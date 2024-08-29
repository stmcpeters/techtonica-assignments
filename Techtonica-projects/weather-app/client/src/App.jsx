import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // sets initial state of city to be updated
  const [city, setCity] = useState('');
  // sets initial state of weather data to be updated
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/weather')
      .then((res) => res.json())
      .then((weatherData) => setWeatherData(weatherData))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  }

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`);
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.error('Error fetching weather data: ', error);
    }
  }
  const handleInputChange = (event) => {
    setCity(event.target.value)
  }

  return (
    <div>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
          <input 
          type="text"
          placeholder="Enter city name"
          label="city-name"
          value={city}
          // sets city to be changed with user input
          onChange={handleInputChange}
          />
        <button type="submit">Get Weather</button>
      </form>
      {weatherData ? (
        <>
          {/* displays weather data name from API */}
          <h2>{weatherData.name}</h2>
          {/* displays temp from API */}
          <p>Temperature: {weatherData.main.temp} &deg;F</p>
          {/* displays description from API */}
          <p>Description: {weatherData.weather[0].description}</p>
          {/* displays feels like from API */}
          <p>Feels like: {weatherData.main.feels_like} &deg;F</p>
          {/* displays humidity from API */}
          <p>Humidity: {weatherData.main.humidity}%</p>
          {/* displays pressure from API */}
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          {/* displays wind speed from API */}
          <p>Wind Speed: {weatherData.wind.speed} mph</p>
        </>
      ) : (
        // loading message when fetching data from API
        <p>Fetching weather...</p>
      )}
    </div>
  )
}

export default App;
