import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [trivia, setTrivia] = useState(null)

// fetch API data from backend
  const fetchTrivia = async () => {
    try {
      // fetches trivia data from backend server
      const response = await fetch('http://localhost:8080/trivia')

      // error handling if problems connecting to backend
      if(!response.ok){
        throw new error(`HTTP error status: ${response.status}`);
      }

    // if no errors, parse response in JSON format
    const trivia = response.json();
    setTrivia(trivia);
  } catch (error) {
    console.error(`Error fetching trivia: `, error);
  }
}

// initial data fetch from API
useEffect(() => {
  fetchTrivia()
}, []);


// game logic
// choosing right/wrong answers
// track score - guessed correct vs # of total questions





  return (
    <>
    {/* displays title */}
      <h1>Reel Trivia</h1>
      {/* conditionally display instructions/starter screen OR trivia gameplay */}
      {trivia ? (
        // display trivia question

        // display trivia answers (in buttons?)

        // loading message to display when fetching data from API
      ) : <p>BRB..fetching trivia</p>}
    </>
  )
}

export default App
