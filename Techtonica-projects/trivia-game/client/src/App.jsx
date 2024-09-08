import Game from './Game.jsx'
import './App.css'

function App() {



  return (
    <>
    {/* displays title */}
      <h1>🎞 Reel Trivia 🎥</h1>
      {/* conditionally display instructions/starter screen OR trivia gameplay */}

      <Game />
      {/* {trivia ? (
        // display trivia questions and option buttons
        
        // loading message to display when fetching data from API
      ) : <p>BRB..fetching trivia</p>} */}
    </>
  )
}

export default App
