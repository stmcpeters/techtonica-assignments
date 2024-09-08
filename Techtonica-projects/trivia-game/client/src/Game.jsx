// import hooks from react
  import { useState, useEffect } from "react";
// import question card component that will display questions + selections
  import QuestionCard from "./QuestionCard";

// game component to load game, and hold question totals + scores
  const Game = (props) => {

  // initializes and sets score states
    const [score, setScore] = useState(0);
  // initializes and sets question states
    const [questions, setQuestions] = useState([]);

  // fetch API data from backend
    const loadData = async () => {
      try {
        // fetches trivia data from API (backend server)
      // const response = await fetch('http://localhost:8080/trivia')
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


// handle answers
// if (choice === questions.correct_answers){
//   setScore(prevScore => prevScore + 1)
//   alert('Correct!');
// } else {
//   alert('Incorrect! Try again');
// }



  return (
    <>
      <div className="Container">
        {/* displays score out # of total questions */}
        <div className="display-score">Score: {score}/{questions.length}</div>
        {/* maps each question and answer to display */}
        {questions && questions.map((question, index) => (
          <QuestionCard key={index} question={question} />
        ))}
      </div>
    </>
  );
};


export default Game