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

// server set up - will display on specified port
app.listen(PORT, () => {
  console.log(`Server has started running on port: http://localhost:${PORT}`);
})