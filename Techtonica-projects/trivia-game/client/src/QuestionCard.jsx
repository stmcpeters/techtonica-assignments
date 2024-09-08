// creates card component to hold question and options to select
const QuestionCard = ({ question }) => {


  return (
    // card will hold questions and selections
    <div className={'question-section'}>
      {/* will hold and display question text */}
      <div className="question-text">{question.question}</div>
      {/* will hold and display buttons to answer */}
        <div className="answer-section">
          {/* makes shallow copies of incorrect and correct answers (true or false) and creates buttons for each */}
        {[...question.incorrect_answers, question.correct_answer].map((answer, index) => (
          <button key={index}>{answer}</button>
        ))}
        </div>
    </div>
  )
}

export default QuestionCard;