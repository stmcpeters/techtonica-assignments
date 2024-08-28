import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      {/* <h1>{message}</h1> */}
      <h1>Weather App</h1>
      <form>
          <input 
          type="text"
          placeholder="Enter city here"
          name="Enter city"
          />
        <input
          className='submit-btn'
          type="submit"
          value="Enter"
        />
      </form>
    </div>
  )
}

export default App;
