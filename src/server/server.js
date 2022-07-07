const express = require('express');
const mysql = require('mysql');
const dotenv = require('.dotenv')

const app = express();
const port = 8000;
const table ='users';

dotenv.config();
// Database Connection
const pool = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

app.listen(port, () => {
  console.log(`App server now listening to port ${port}`);
});

app.get('/api/users', (req, res) => {
  pool.query(`select * from ${table}`, (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});