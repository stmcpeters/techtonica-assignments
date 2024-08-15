import './SingleCard.css'

export default function SingleCard({ card, handleChoice}) {

  const handleClick = () => {
    handleChoice(card);
  }

  return (
    <div className="card">
      {/* setting display of front and back of cards */}
        <div>
          <img className="front" src={card.src} alt="front of card" />
          <img className="back" src='/img/cover.jpg' alt="back of card" onClick={handleClick} />
        </div>
    </div>
  )
}
