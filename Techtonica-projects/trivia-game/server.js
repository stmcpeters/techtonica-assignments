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

//imports hardcoded fakedata for testing
import fakedata from './fakedata.js';

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
      const url = `https://opentdb.com/api.php?amount=5&category=11&difficulty=medium&type=boolean`;
    // fetching trivia data from API
      const response = await fetch(url);
      // handles and displays HTTP errors
      if(!response.ok) {
        console.error(`Error! Receiving HTTP error status: ${response.status}`);
      }
      // if no errors, parse response in JSON format
      const data = await response.json();
      // testing to see if data has been collected
      console.log("Received data: ", data.results);
      // sends json data as a response to client side
      res.json(data);
    } catch (error) {
      console.error(`Error fetching trivia: `, error);
    }
  })

// create route to hardcoded data for testing 
// importing to use fakedata at the top
app.get('/api/data', (req, res) => {
  res.json(fakedata);
})


// server set up - will display on specified port
  app.listen(PORT, () => {
    console.log(`Server has started running on port: http://localhost:${PORT}`);
  })