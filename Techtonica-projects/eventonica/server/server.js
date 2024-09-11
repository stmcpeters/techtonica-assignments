// import express so you're able to use
    import express from 'express';
// translates entire body portion of an incoming request stream into human readable info
    import bodyParser from 'body-parser';
    import cors from 'cors';
// import dotenv to use .env file info
    import dotenv from 'dotenv';
    dotenv.config();
// import connection to database 
    import db from './db/db-connection.js';

    const app = express();
// specifies port of the app backend
    const PORT = process.env.PORT || 8080;
// config cors middleware
    app.use(cors());
// initialize express application
    app.use(express.json());

//initialize bodyParser to use - makes incoming response readable
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

// creates an endpoint for the route "/""
app.get('/api', (req, res) => {
    res.send('Hola, from My template ExpressJS with React-Vite');
});

// create the get request for students in the endpoint '/api/students'
app.get('/api/events', async (req, res) => {
    try {
        // const { rows: events } = await db.query('SELECT * FROM events');
        // res.send(events);
        const result = await db.query('SELECT * FROM public.events;');
        res.json(result.rows);
        console.log('connected to events database');
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// create the POST request
app.post('/api/events', async (req, res) => {
    try {
        const newEvent = {
            title: req.body.title,
            location: req.body.location,
            eventtime: req.body.eventtime
        };
        //console.log([newEvent.title, newEvent.location, newEvent.eventtime]);
        const result = await db.query(
            'INSERT INTO events(title, location, eventtime) VALUES($1, $2, $3) RETURNING *',
            [newEvent.title, newEvent.location, newEvent.eventtime],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }

});

// delete request for students
app.delete('/api/events/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;
        await db.query('DELETE FROM events WHERE id=$1', [eventId]);
        console.log("From the delete request-url", eventId);
        res.status(200).end();
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });

    }
});

// put request - Update a student 
app.put('/api/events/:eventId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const eventId = req.params.eventId
    const updatedEvent = { id: req.body.id, title: req.body.title, lastname: req.body.location, eventtime: req.body.eventtime}
    console.log("In the server from the url - the student id", studentId);
    console.log("In the server, from the react - the student to be edited", updatedStudent);
    // UPDATE students SET location = "something" WHERE id="16";
    const query = `UPDATE events SET title=$1, location=$2, eventtime=$3 WHERE id=${eventId} RETURNING *`;
    const values = [updatedEvent.title, updatedEvent.location, updatedEvent.eventtime];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Hola, Server listening on http://localhost:${PORT}`);
});