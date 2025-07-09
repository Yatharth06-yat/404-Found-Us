import express from 'express'
import mysql from 'mysql2';
import cors from 'cors';
const app = express()
const port = 3000

const connection = mysql.createConnection({
  host: 'sql8.freesqldatabase.com',
  user: 'sql8788955',
  password: 'ghMqurrMYD', // 👈 put your real password
  database: 'sql8788955',
  port: 3306
});

app.use(cors);

connection.connect((err) => {
  if (err) {
    return console.error('❌ Connection error:', err.message);
  }
  console.log('✅ Connected to MySQL Database');
});

app.get('/', (req, res) => {
    console.log('API Request: /items received'); // Log when the route is hit
    const sql = 'SELECT * FROM patients_list;';
    console.log('Executing SQL Query:', sql);

    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Database Query Error:', err); // Log any database errors
            return res.status(500).json({ error: 'Failed to fetch items' });
        }
        console.log('Database Query Successful. Results:', results); // <<< IMPORTANT: Log the results here!
        if (results.length === 0) {
            console.log('No items found in the database.');
        }
        res.json(results);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})
