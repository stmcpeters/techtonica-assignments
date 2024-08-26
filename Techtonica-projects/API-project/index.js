// import express so you're able to use
import express from 'express';
// translates the entire body portion of an incoming request stream into human readable info
import bodyParser from 'body-parser';
// import cors from 'cors';
// import albums from './albumData.js';
// import pkg from 'pg';

// import routes
import albumRoutes from './routes/albums.js';

// initialize express application
const app = express();
// specifies port of the app backend
const PORT = process.env.PORT || 5001;

//initialize bodyParser to use - makes incoming response readable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var urlencodedParser = bodyParser.urlencoded({extended: false});

// set starting path for all routes
app.use('/albums', albumRoutes);

// GET request route (path we're expecting that request '/' is homepage, (request,response) callback function)
app.get('/', (req, res) => res.send('Hi from homepage'));

// // config cors middleware
// app.use(cors());

// const { Pool } = pkg;

// const db = new Pool({
//   user: 'username',
//   host: 'localhost',
//   database: 'database-name',
//   password: 'password',
//   port: 5432,
// });

// allows app to listen for incoming requests
var server = app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
