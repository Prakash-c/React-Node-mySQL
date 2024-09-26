// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace the database credentials with your MySQL credentials
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'appuser',
  password: 'root',
  database: 'studentdb',
  // insecureAuth: true, // Add this option
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the MySQL database!');
});

app.get('/api/data', (req, res) => {
  const sqlQuery = 'SELECT * FROM names'; // Replace with your table name
  connection.query(sqlQuery, (err, result) => {
    if (err) {
      console.error('Error executing MySQL query: ', err);
      res.status(500).json({ error: 'Error fetching data from the database.' });
      return;
    }
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
