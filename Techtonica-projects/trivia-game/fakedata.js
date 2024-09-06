// hardcoded data from trivia API for testing

const fakedata = {
  "response_code": 0,
  "results": [
      {
          "type": "boolean",
          "difficulty": "medium",
          "category": "Entertainment: Film",
          "question": "The color of the pills in the Matrix were Blue and Yellow.",
          "correct_answer": "False",
          "incorrect_answers": [
              "True"
          ]
      },
      {
          "type": "boolean",
          "difficulty": "medium",
          "category": "Entertainment: Film",
          "question": "The Xenomorph from the science fiction film &quot;Alien&quot; has acidic blood.",
          "correct_answer": "True",
          "incorrect_answers": [
              "False"
          ]
      },
      {
          "type": "boolean",
          "difficulty": "medium",
          "category": "Entertainment: Film",
          "question": "Sean Connery wasn&#039;t in &quot;Indiana Jones and the Kingdom of the Crystal Skull&quot; because he found retirement too enjoyable.",
          "correct_answer": "True",
          "incorrect_answers": [
              "False"
          ]
      }
  ]
}

// exports the fakedata object
export default fakedata;