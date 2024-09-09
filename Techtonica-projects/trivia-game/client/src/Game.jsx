// import hooks from react
  import { useState, useEffect, useCallback } from "react";
// import question card component that will display questions + selections
  import QuestionCard from "./QuestionCard";

// game component to load game, and hold question totals + scores
  const Game = (props) => {

  // initializes and sets score states
    const [score, setScore] = useState(0);
  // initializes and sets question states
    const [questions, setQuestions] = useState([]);
  // Initialize and set selectedAnswers state
    const [selectedAnswers, setSelectedAnswers] = useState({});

  // fetch API data from backend
    const loadData = async () => {
      try {
        // fetches trivia data from API (backend server)
        //const response = await fetch('http://localhost:8080/trivia')
        //fetches hardcoded trivia data for testing
        const response = await fetch('http://localhost:8080/api/data')

        // error handling if problems connecting to backend
        if(!response.ok){
          throw new error(`HTTP error status: ${response.status}`);
        }

      // if no errors, parse response in JSON format
      const data = await response.json();
      // testing to see if data has been collected
      console.log("Received data: ", data.results);
      // displays data as an empty array if it doesn't work
      setQuestions(data.results || []);
    } catch (error) {
      console.error(`Error fetching trivia: `, error);
    }
  }

// load game / fetches questions on page load
  useEffect(() => {
    const fetchData = async () => {
      await loadData();
    }
    fetchData();
  }, []);

// checks to see if the user's answer matches the correct answer
  const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
  }

// callback function to handle user answers
  const handleAnswer = useCallback((answer, correctAnswer) => {
    const isCorrect = checkAnswer(answer, correctAnswer);
    // increases score and alert for correct answer
    if(isCorrect) {
      setScore(prevScore => prevScore + 1)
      alert('Correct! 🤩');
      // alert for incorrect answer
    } else {
      alert('Incorrect! 😢')
    }
  }, [checkAnswer]); // array ensures this callback isn't refreshed

// checks score and display winning message when score === 5
  useEffect(() => {
    if (score >= 5) {
      alert("Yay! You won! 🤩");
      // reload the page to fetch new questions
      window.location.reload();
    }
  }, [score]); // score is watched for changes


  return (
    <>
      <div className="Container">
        {/* displays score out # of total questions */}
        <div className="display-score">Score: {score}/{questions.length}</div>
        {/* maps each question and answer to display */}
        {questions && questions.map((question, index) => (
          <QuestionCard 
          key={index} 
          question={question}
          onSelect={(answer) => handleAnswer(answer, question.correct_answer, index)}
          selectedAnswer={selectedAnswers[index]} />
        ))}
      </div>
    </>
  );
};


export default Game;