// import express so you're able to use
import express from 'express';
// translates the entire body portion of an incoming request stream into human readable info
import bodyParser from 'body-parser';
import cors from 'cors';
// import albums from './albumData.js';     - using hardcoded data
// pool manages psql database
import pkg from 'pg';
const { Pool } = pkg;

// import routes for hard coded data
// import albumRoutes from './routes/albums.js';

// initialize express application
const app = express();
// specifies port of the app backend
const PORT = process.env.PORT || 5001;

//initialize bodyParser to use - makes incoming response readable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var urlencodedParser = bodyParser.urlencoded({extended: false});

// set starting path for all routes using hardcoded data
// app.use('/albums', albumRoutes);


// test connection to page
//GET request route (path we're expecting that request '/' is homepage, (request,response) callback function)
app.get('/', (req, res) => res.send('Hi from homepage'));

// // config cors middleware
app.use(cors());


const dbConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const db = new Pool(dbConfig);


// get all from albums table database  ------BROKEN says album data doesnt exist
app.get('/albums', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM testing;');
    res.json(result.rows);
    console.log('connected to albums database');
  } catch (error) {
    console.error('error fetching testing table: ', error);
    res.status(500).json({ message: 'Failed to fetch testing table' });
  }
});





// function to check connection to database
// async function testConnection() {
//   try {
//     const client = await db.connect();
//     console.log('database connection');

//     const result = await client.query('SELECT * FROM albums_data;');
//     console.log('Getting query from albums_data table');
//     res.json(result.rows);

//     await client.release();
//     console.log('database connection released');
//   } catch (error) {
//     console.log('database not connected: ', error);
//   }
// }

// testConnection().catch(console.log);




// allows app to listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
