import pg from 'pg';
const { Pool } = pg;
const db = new Pool({
    connectionString: process.env.DATABASE_URI
  });

  export default db;