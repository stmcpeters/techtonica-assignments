// creates card component to hold question and options to select
const QuestionCard = (props) => {


  return (
    // card will hold questions and selections
    <div className={'question-section'}>
      {/* will hold and display question text */}
      <div className="question-text">{props.question.question}</div>
      {/* will hold and display buttons to answer */}
        <div className="answer-section">
          {/* change state when clicked */}
          <button>True</button>
          <button>False</button>
        </div>
    </div>
  )
}

export default QuestionCard;