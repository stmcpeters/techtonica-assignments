import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './SingleCard';


// stored outside component because card images won't change
// created match property, if cards match property will change to true
const cardImages= [
  {"src" : "/img/bear.jpg", matched: false},
  {"src" : "/img/bird.jpg", matched: false},
  {"src" : "/img/giraffe.jpg", matched: false},
  {"src" : "/img/rabbit.jpg", matched: false},
  {"src" : "/img/koala.jpg", matched: false},
  {"src" : "/img/lion.jpg", matched: false}
]


function App() {
  // creating and setting initial states
  // initial state of cards (displaying none until new game button is clicked)
    const [cards, setCards] = useState([])
  // initial state of turns user has taken - starting at zero
    const [turns, setTurns] = useState(0)

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
      setTurns(0)
  }
  // console.log(cards, turns)   test to see if cards are shuffled in console (not next to each other)

  // handle user choice
  const handleChoice = (card) => {
    // checking if the choice is the first or second
    // choiceOne's initial state value is null(false)
    // if choiceOne has no value, we want to update the state passing a chosen card's value
    // if choiceOne has a value already, we want to update the state of choiceTwo passing a chosen card's value
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // // compare chosen cards when both choices have card values
  useEffect(() => {
    // checks choices have values
    if(choiceOne && choiceTwo){

      // compares src properties of cards
      if(choiceOne.src === choiceTwo.src){
        console.log("It's a match!");
        // changes state of card to true (when matched)
        setCards(prevCards => {
          // iterates over each card
          return prevCards.map(card => {
            // checks if the card's src === a choice (either bc they match)
            if(card.src === choiceTwo.src){
              // returns object of all card properties and changes the state of cards with matching srcs to true
              return {...card, matched: true};
            } else {
              // if cards don't match return card untouched
              return card;
            }
          })
        })
        resetTurn();
      // if src doesn't match
      } else {
        console.log('Not a match! Try again');
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards);
  
  // const compareCards(choiceOne, choiceTwo) {
  //   if (choiceOne[card]) && choiceTwo[card]) {
  //     if(choiceOne[card].src === choiceTwo[card].src) {
  //       console.log('match!');
  //     } else {
  //       console.log('not a match!');
  //     }
  //   } 
  // }


  // reset choices and increase user turn by 1
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
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
