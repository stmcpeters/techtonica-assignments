import { useState } from 'react'
import './App.css'
import SingleCard from './SingleCard';


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
  // creating and setting initial states
  // initial state of cards (displaying none until new game button is clicked)
    const [cards, setCards] = useState([]);
  // initial state of turns user has taken - starting at zero
    const [turns, setTurns] = useState(0);

  // creating and setting initial states for user choices 
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffleCards = () => {
    // creates copy of card images and duplicates so theres 2 of each (to match up)
    const shuffledCards = [...cardImages, ...cardImages]
    // sort/shuffle cards - negative result has original order, positive number will shuffle cards 
      .sort(() => Math.random() - 0.5)
      // iterating thru cards and for each card you want to assign a random unique ID property
      .map((card) => ({ ...card, id: Math.random()}))

      // sets new state as shuffled cards after shuffling
      setCards(shuffledCards)
      // sets new state for number of turns user has taken
      setTurns(0);
  }
  // console.log(cards, turns)   test to see if cards are shuffled in console (not next to each other)

  // handle user choice
  const handleChoice = (card) => {
    // checking if the choice is the first or second
    // choiceOne's initial state value is null(false)
    // if choiceOne has no value, we want to update the state passing a chosen card's value
    // if choiceOne has a value already, we want to update the state of choiceTwo passing a chosen card's value
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }


  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <button onClick={shuffleCards}>New Game</button>
      {/* creates grid for cards to be displayed */}
      <div className='card-grid'>
        {/* for every card, run the function SingleCard using unique card ids*/}
        {/* initializing props to be exported from App to SingleCard */}
        {cards.map(card => (
          <SingleCard  
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  )
}

export default App
