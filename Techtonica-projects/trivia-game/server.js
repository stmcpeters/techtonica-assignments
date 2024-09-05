// importing and initializing express
  import express from 'express';
  const app = express();
// importing and initializing bodyparser - converts data to human readable JSON
  import bodyParser from 'body-parser';
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
// import cors middleware - allows you to run frontend and backend on different ports
  import cors from 'cors';
  app.use(cors());

// initializing port to display
  const PORT = 8080;

// testing connection
  app.get('/', (req,res) => {
    res.send('hello from the server');
  })

// fetching data from API
  app.get('/trivia', async (req, res) => {
    try {
    // setting variable for trivia API
      const url = `https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple`;
    // fetching trivia data from API
      const response = await fetch(url);
      // handles and displays HTTP errors
      if(!response.ok) {
        console.error(`Error! Receiving HTTP error status: ${response.status}`);
      }
      // parses fetched response into JSON format
        const data = await response.json();
      // sends JSON data as a response to client side
        res.json(data);
    // catches errors and displays errors fetching trivia data from API
      } catch (error) {
        console.error(`Oops! There was an error fetching trivia data: `, error);
      }
  })

// server set up - will display on specified port
  app.listen(PORT, () => {
    console.log(`Server has started running on port: http://localhost:${PORT}`);
  })