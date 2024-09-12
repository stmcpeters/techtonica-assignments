// import express so you're able to use
    import express from 'express';
// translates entire body portion of an incoming request stream into human readable info
    import bodyParser from 'body-parser';
    import cors from 'cors';
// import dotenv to use .env file info
    import dotenv from 'dotenv';
    dotenv.config();
// import connection to database 
//    import db from './db/db-connection.js';

    const app = express();
// specifies port of the app backend
    const PORT = process.env.PORT || 8080;
// config cors middleware
    app.use(cors());
// initialize express application
    app.use(express.json());


//Import Pool class from pg package to use for connection pooling
import pkg from 'pg';

const { Pool } = pkg;

// //Create db instance of Pool class with secret configs
const db = new Pool({
    user: process.env.DB_USER,          
    host: process.env.DB_HOST,          
    database: process.env.DB_NAME,        
    port: process.env.DB_PORT,    
});


//initialize bodyParser to use - makes incoming response readable
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


        import hardcodedRoutes from '/Users/beigeh0ney/Desktop/Techtonica/Techtonica-assignments/Techtonica-projects/eventonica/server/hardcodedRoutes';
        app.use('/api', hardcodedRoutes);

// // creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.send('Hola, from the server');
});

        // ERROR CONNECTING TO DB '42P01'


// create the get request for events in the endpoint '/api/events'
// app.get('/api/events', async (req, res) => {
//     try {
//         // const { rows: events } = await db.query('SELECT * FROM events');
//         // res.send(events);
//         const result = await db.query('SELECT * FROM albums_data');
//         res.json(result.rows);
//         console.log('connected to events database');
//     } catch (error) {
//         console.error('error fetching events: ', error);
//         return res.status(500).json({ message: 'failed to fetch ', error });
//     }
// });

// app.get('/api/events', async (req, res) => {
//     try {
//         // const { rows: events } = await db.query('SELECT * FROM events');
//         // res.send(events);
//         const result = await db.query('SELECT * FROM albums_data;');
//         res.json(result.rows);
//         console.log('connected to events database');
//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });
//     }
// });

// // create the POST request
// app.post('/api/events', async (req, res) => {
//     try {
//         const newEvent = {
//             title: req.body.title,
//             location: req.body.location,
//             eventtime: req.body.eventtime
//         };
//         //console.log([newEvent.title, newEvent.location, newEvent.eventtime]);
//         const result = await db.query(
//             'INSERT INTO events(title, location, eventtime) VALUES($1, $2, $3) RETURNING *',
//             [newEvent.title, newEvent.location, newEvent.eventtime],
//         );
//         console.log(result.rows[0]);
//         res.json(result.rows[0]);

//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });
//     }

// });

// // delete request for students
// app.delete('/api/events/:eventId', async (req, res) => {
//     try {
//         const eventId = req.params.eventId;
//         await db.query('DELETE FROM events WHERE id=$1', [eventId]);
//         console.log("From the delete request-url", eventId);
//         res.status(200).end();
//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });

//     }
// });

// // put request - Update a student 
// app.put('/api/events/:eventId', async (req, res) =>{
//     //console.log(req.params);
//     //This will be the id that I want to find in the DB - the student to be updated
//     const eventId = req.params.eventId
//     const updatedEvent = { id: req.body.id, title: req.body.title, lastname: req.body.location, eventtime: req.body.eventtime}
//     console.log("In the server from the url - the student id", studentId);
//     console.log("In the server, from the react - the student to be edited", updatedStudent);
//     // UPDATE students SET location = "something" WHERE id="16";
//     const query = `UPDATE events SET title=$1, location=$2, eventtime=$3 WHERE id=${eventId} RETURNING *`;
//     const values = [updatedEvent.title, updatedEvent.location, updatedEvent.eventtime];
//     try {
//       const updated = await db.query(query, values);
//       console.log(updated.rows[0]);
//       res.send(updated.rows[0]);
  
//     }catch(e){
//       console.log(e);
//       return res.status(400).json({e})
//     }
//   })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on http://localhost:${PORT}`);
});