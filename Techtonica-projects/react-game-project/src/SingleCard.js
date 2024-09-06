import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped, disabled}) {

  const handleClick = () => {
    // prevents other choices from being made when disabled
    if(!disabled){
    handleChoice(card);
    }
  }

  return (
    <div className="card">
      {/* setting display of front and back of cards */}
        {/* checks value of flipped prop, if true has flipped class, false is empty string */}
        <div className={flipped ? "flipped" : ""}>
          <img className="front" src={card.src} alt="front of card" />
          <img className="back" src='/img/cover.jpg' alt="back of card" onClick={handleClick} />
        </div>
    </div>
  )
}
