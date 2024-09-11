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
app.get('/', (req, res) => {
    res.json({ message: 'Hola, from My template ExpressJS with React-Vite' });
});

// // create the get request for students in the endpoint '/api/students'
// app.get('/events', async (req, res) => {
//     try {
//         const { rows: events } = await db.query('SELECT * FROM events');
//         res.send(events);
//     } catch (e) {
//         return res.status(400).json({ e });
//     }
// });

// // create the POST request
// app.post('/api/students', async (req, res) => {
//     try {
//         const newStudent = {
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             iscurrent: req.body.iscurrent
//         };
//         //console.log([newStudent.firstname, newStudent.lastname, newStudent.iscurrent]);
//         const result = await db.query(
//             'INSERT INTO students(firstname, lastname, is_current) VALUES($1, $2, $3) RETURNING *',
//             [newStudent.firstname, newStudent.lastname, newStudent.iscurrent],
//         );
//         console.log(result.rows[0]);
//         res.json(result.rows[0]);

//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });
//     }

// });

// // delete request for students
// app.delete('/api/students/:studentId', async (req, res) => {
//     try {
//         const studentId = req.params.studentId;
//         await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//         console.log("From the delete request-url", studentId);
//         res.status(200).end();
//     } catch (e) {
//         console.log(e);
//         return res.status(400).json({ e });

//     }
// });

// // put request - Update a student 
// app.put('/api/students/:studentId', async (req, res) =>{
//     //console.log(req.params);
//     //This will be the id that I want to find in the DB - the student to be updated
//     const studentId = req.params.studentId
//     const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
//     console.log("In the server from the url - the student id", studentId);
//     console.log("In the server, from the react - the student to be edited", updatedStudent);
//     // UPDATE students SET lastname = "something" WHERE id="16";
//     const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
//     const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
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
    console.log(`Hola, Server listening on ${PORT}`);
});