// importing and using express
  import express from 'express';
  const app = express();
// import body parser - parses the incoming request bodies in JSON
  import bodyParser from 'body-parser';
// import cors middleware - allows you to run backend and frontend on different ports (CORS usually blocks browsers from doing this)
  import cors from 'cors';
// import dotenv to hide and access .env files
  import dotenv from 'dotenv';

// initialize body parser to use - makes data more readable into JSON and urlcoded formats
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
// use cors middleware
  app.use(cors());
// allows you to use .env variables 
  dotenv.config();

// setting port to display (will be either port set in .env or 8080)
  const PORT = process.env.DB_PORT || 8080;

// checking get connection
  app.get('/api', (req, res) => {
    res.send('hello world from the server');
  })

// endpoint for route/api from server.js to connect to front end
// app.get('/api', (req, res) => {
//   res.send('hello from express JS');
//   res.end();
// })


// fetching weather from API

  app.get('/weather', async (req, res) => {
    //sets city equal to requested city entered
      const city = req.query.city || 'San Francisco'; //sets default city displayed when page loads to SF
    try {
      // setting variable for weather API url
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;
      // fetching weather data from API
        const response = await fetch(url);
      // handles and displays HTTP errors
        if(!response.ok) {
        console.error(`Receiving HTTP error status: ${response.status}`);
      }
      // parses fetched response into json format
        const data = await response.json();
      // sends json data as a response to client side
        res.json(data);
      // catches errors and displays errors fetching data from API
    } catch (error) {
      console.error('There was an error fetching weather data: ', error);
    }
  })

// server set up - will display on selected port 
  app.listen(PORT, () => {
    console.log(`Server started on port: http://localhost:${PORT}`);
  })