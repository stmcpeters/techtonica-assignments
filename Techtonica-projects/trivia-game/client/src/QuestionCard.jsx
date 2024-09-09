// creates card component to hold question and options to select
const QuestionCard = ({ question, onSelect, selectedAnswer }) => {
  // handle answer selection
  const handleAnswerClick = (answer) => {
    // check if the selected answer === correct answer
    const isCorrect = checkAnswer(answer, question.correct_answer);
    // messages for right/wrong answers
    if(isCorrect) {
      alert('Correct! 🤩')
    } else {
      alert('Incorrect! 😢')
    }
  }


  return (
    // card will hold questions and selections
    <div className={'question-section'}>
      {/* will hold and display question text */}
      <div className="question-text">{question.question}</div>
      {/* will hold and display buttons to answer */}
        <div className="answer-section">
          {/* makes shallow copies of incorrect and correct answers (true or false) and creates buttons for each */}
        {[question.correct_answer, ...question.incorrect_answers].map((answer, index) => (
          <button 
          key={index} 
          className={`answer-button ${selectedAnswer === answer ? 'selected':''}`}
          onClick={() => onSelect(answer)}>{answer}</button>
        ))}
        </div>
    </div>
  )
}

export default QuestionCard;