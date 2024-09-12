import pkg from 'pg';
const { Pool } = pkg;
const db = new Pool({
    connectionString: process.env.DATABASE_URI
  });

  //module.exports = db;
  export default db;

// const { Pool } = require('pg');
// const db = new Pool({
//     connectionString: process.env.DATABASE_URI
//   });
//   export default db;



//Import Pool class from pg package to use for connection pooling
// import pkg from 'pg';

// const { Pool } = pkg;

// //Create db instance of Pool class with secret configs
// const db = new Pool({
//     user: process.env.DB_USER,          
//     host: process.env.DB_HOST,          
//     database: process.env.DB_NAME,      
//     password: process.env.DB_PASSWORD,  
//     port: process.env.DB_PORT,    
// });

// //Export db object for server to import and use  
// // module.exports = db;
// export default db;