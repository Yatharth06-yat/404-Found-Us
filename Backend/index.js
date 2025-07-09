import express from 'express'
import mysql from 'mysql2';
const app = express()
const port = 3000

// Replace with your actual credentials
const connection = mysql.createConnection({
  host: 'sql8.freesqldatabase.com',
  user: 'sql8788955',
  password: 'ghMqurrMYD', // 👈 put your real password
  database: 'sql8788955',
  port: 3306
});

// Connect to DB
connection.connect((err) => {
  if (err) {
    return console.error('❌ Connection error:', err.message);
  }
  console.log('✅ Connected to MySQL Database');

  // Example Query (you can change table name)
  connection.query('SELECT * FROM prescriptions', (err, results) => {
    if (err) {
    return console.error('❌ Connection error:', err.message);
  }

    console.log('📦 Prescription Data:'); 
    console.table(results); // nicely formats the output

    connection.end(); // close the connection
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})
