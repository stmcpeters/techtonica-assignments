// importing and using express
import express from 'express';
const app = express();
// import body parser
import bodyParser from 'body-parser';
// import cors middleware
import cors from 'cors';
// import dotenv to hide and access .env files
import dotenv from 'dotenv';

// initialize body parser to use - makes data more readable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// use cors middleware
app.use(cors());
// use .env variables 
dotenv.config();

// setting port to display
const PORT = 8080;

// checking get connection
app.get('/', (req, res) => {
  res.send('hello from the server');
  res.end();
})

// server set up
app.listen(PORT, () => {
  console.log(`Server started on port: http://localhost:${PORT}`);
})