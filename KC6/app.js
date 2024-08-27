// Requiring module
import express from 'express';
// Creating express object
const app = express();
// import body parser
import bodyParser from 'body-parser';
// import cors middleware
import cors from 'cors';
// import dotenv to hide API
import dotenv from 'dotenv';
dotenv.config();

// event ID
const eventId = '1002056707587';

//initialize bodyParser to use - makes incoming response readable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//initalize cors middleware
app.use(cors());

// Port Number
const PORT = process.env.PORT || 8008;

//Handling GET request
app.get('/', (req, res) => { 
    res.send('A simple Node App is running on this server') 
    res.end() 
}) 

// get venue
app.get('/venue', async (req, res) => {
  try {
    // venue parameter
    const venueParam = 'venue';
    // url template provided by eventbrite to access venue
    const url = `https://www.eventbriteapi.com/v3/events/${eventId}/?expand=${venueParam}`;
    // adds header to include API key
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.EVENTBRITE_API_KEY}`
      }
    });
    // shows error if connection is not 200 (good)
    if (!response.ok) {
      console.error(`HTTP error status: ${response.status}`);
    }
    // parses data from API into json
    const data = await response.json();
    // display data shown in json format
    res.send(data);
    // catches and displays any error codes
  } catch (error) {
    console.error('There was an error fetching venue data: ', error);
  }
})

// get organizer
app.get('/organizer', async (req, res) => {
  try {
    // organizer parameter
    const organizerParam = 'organizer';
    const url = `https://www.eventbriteapi.com/v3/events/${eventId}/?expand=${organizerParam}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.EVENTBRITE_API_KEY}`
      }
    });

    if (!response.ok) {
      console.error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('There was an error fetching organizer data: ', error);
  }
})

// get ticket classes 
app.get('/ticket_classes', async (req, res) => {
  try {
    const ticketClassParam = 'ticket_classes';
    const url = `https://www.eventbriteapi.com/v3/events/${eventId}/?expand=${ticketClassParam}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.EVENTBRITE_API_KEY}`
      }
    });

    if (!response.ok) {
      console.error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('There was an error fetching ticket classes: ', error);
  }
})

// get category
app.get('/category', async (req, res) => {
  try {
    const categoryParam = 'category';
    const url = `https://www.eventbriteapi.com/v3/events/${eventId}/?expand=${categoryParam}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.EVENTBRITE_API_KEY}`
      }
    });

    if (!response.ok) {
      console.error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('There was an error fetching event category: ', error);
  }
})

// get ticket availability 
app.get('/ticket_availability', async (req, res) => {
  try {
    const ticketAvailability = 'ticket_availability';
    const url = `https://www.eventbriteapi.com/v3/events/${eventId}/?expand=${ticketAvailability}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.EVENTBRITE_API_KEY}`
      }
    });

    if (!response.ok) {
      console.error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('There was an error fetching available tickets: ', error);
  }
})


// Server Setup
app.listen(PORT,console.log(
  `Server started on port: http://localhost:${PORT}`));