import express from 'express';
import cors from 'cors';
import albums from './albums.js';
import pkg from 'pg';


const app = express();
const PORT = 5001;

// config cors middleware
app.use(cors());

const { Pool } = pkg;

const db = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'database-name',
  password: 'password',
  port: 5432,
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
