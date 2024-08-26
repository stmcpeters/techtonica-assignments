// import express so you're able to use
import express from 'express';
// translates the entire body portion of an incoming request stream into human readable info
import bodyParser from 'body-parser';
import cors from 'cors';
// import albums from './albumData.js';     - using hardcoded data
// pool manages psql database
import pkg from 'pg';
const { Pool } = pkg;
// import dotenv to use .env file info
import dotenv from 'dotenv';
dotenv.config();

// import routes for hard coded data
// import albumRoutes from './routes/albums.js';

// initialize express application
const app = express();
// specifies port of the app backend
const PORT = process.env.PORT || 5002;

//initialize bodyParser to use - makes incoming response readable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// var urlencodedParser = bodyParser.urlencoded({extended: false});
// config cors middleware
app.use(cors());

// set starting path for all routes using hardcoded data
// app.use('/albums', albumRoutes);

// test connection to page
//GET request route (path we're expecting that request '/' is homepage, (request,response) callback function)
app.get('/', (req, res) => res.send('Hi from homepage'));


// setting up database
const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};
// console.log(process.env);

const db = new Pool(dbConfig);

/////////////////////// ALL ROUTES ////////////////////////

// get all from albums table database
app.get('/albums', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM albums_data;');
    res.json(result.rows);
    console.log('connected to albums database');
  } catch (error) {
    console.error('error fetching albums data: ', error);
    res.status(500).json({ message: 'Failed to fetch albums data' });
  }
});

// post route to create new album
app.post('/albums', async (req, res) => {
  try {
    // initalizes new post requested data
    const { title, artist, genre, year } = req.body;
    // query to insert new album into database
    const result = await db.query(`INSERT INTO albums_data (title, artist, genre, year) VALUES ($1, $2, $3, $4)`, [title, artist, genre, year]);
    // message to confirm new album has been added to database
    res.send(`New album by ${artist} added to the database`);
  } catch (error) {
    console.error('Error creating new album: ', error);
  }
});

// get - search albums by ID
app.get('/albums/:id', async (req, res) => {
  try{
    // initalizes id you're searching for
    const { id } = req.params;
    // query to search for albums matching given id
    const result = await db.query(`SELECT * FROM albums_data WHERE id = $1`, [id]);
    // return album data as JSON
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching album: ', error);
  }
})

// delete - delete albums by ID
app.delete('/albums/:id', async (req, res) => {
  try {
    // initalizes id you're searching for
    const { id } = req.params;
    // query to delete album from database using ID
    const result = await db.query(`DELETE FROM albums_data WHERE id = $1`, [id]);
    // message to confirm new album has been added to database
    res.send(`Album with the id ${id} has been deleted from the database`);
  } catch (error) {
      console.error(`Cannot find album matching id: ${id}: `, error);
  }
})

 // demo example
// {
//   "title": "1992 Deluxe",
//   "artist": "Princess Nokia",
//   "genre": "Hip-Hop/Rap",
//   "year": 2017
// }

// patch - update album details by ID
app.patch('/albums/:id', async (req, res) => {
  try {
    // initalizes id you're searching for
    const { id } = req.params;
    // gets properties to be updated
    const { title, artist, genre, year } = req.body;
    // query to update album by specified ID
    const result = await db.query(`UPDATE albums_data SET title=$1, artist=$2, genre=$3, year=$4 WHERE id = $5`, [title, artist, genre, year, id]);
    // message to confirm album details have been updated
    res.send(`Album with the id ${id} has been updated in the database`);
  } catch (error) {
      console.error(`Cannot find album matching id: `, error);
  }
})


// allows app to listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
