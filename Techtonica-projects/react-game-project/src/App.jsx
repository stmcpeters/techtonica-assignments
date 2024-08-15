import { useState } from 'react'
import './App.css'


// stored outside component because card images won't change
const cardImages= [
  {"src" : "/img/bear.jpg"},
  {"src" : "/img/bird.jpg"},
  {"src" : "/img/giraffe.jpg"},
  {"src" : "/img/rabbit.jpg"},
  {"src" : "/img/koala.jpg"},
  {"src" : "/img/lion.jpg"}
]


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

// shuffle cards
  const shuffleCards = () => {
    // creates copy of card images and duplicates so theres 2 of each (to match up)
    const shuffledCards = [...cardImages, ...cardImages]
    // sort/shuffle cards - negative result has original order, positive number will shuffle cards 
      .sort(() => Math.random() - 0.5)
      // for each card you want to assign a unique ID property
      .map((card) => ({ ...card, id: Math.random()}))

      // sets new state as shuffled cards after shuffling
      setCards(shuffledCards)
      // sets new state for number of turns user has taken
      setTurns(0);
  }
  // console.log(cards, turns)   test to see if cards are shuffled in console; not next to each other

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      {/* creates grid for cards to be displayed */}
      <div className='card-grid'>
        {/* for every card, we want the unique key value */}
        {cards.map(card => (
          <div className="card" key={card.id}>
            {/* setting display of front and back of cards */}
            <div>
              <img className="front" src={card.src} alt="front of card" />
              <img className="back" src='/img/cover.jpg' alt="back of card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
