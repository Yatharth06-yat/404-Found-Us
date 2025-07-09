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

app.use(cors());

connection.connect((err) => {
  if (err) {
    return console.error('❌ Connection error:', err.message);
  }
  console.log('✅ Connected to MySQL Database');
});

app.get('/appointments', (req, res) => {
    const sql = 'SELECT * FROM appointments';

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

app.get('/available_doctors', (req, res) => {
    const sql = 'SELECT * FROM available_doctors';

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

app.get('/prescriptions', (req, res) => {
    const sql = 'SELECT * FROM prescriptions';

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

app.get('/prescription_medicines', (req, res) => {
    const sql = 'SELECT * FROM prescriptions';

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

app.get('/reports', (req, res) => {
    const sql = 'SELECT * FROM reports';

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

app.get('/medical_history', (req, res) => {
    const sql = 'SELECT * FROM medical_history';

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

app.get('/medical_reports', (req, res) => {
    const sql = 'SELECT * FROM medical_reports';

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

app.get('/patients_list', (req, res) => {
    const sql = 'SELECT * FROM patients_list';

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

app.get('/cards', (req, res) => {
    const sql = 'SELECT * FROM cards';

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

app.get('/top_doctors', (req, res) => {
    const sql = 'SELECT * FROM top_doctors';

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

app.get('/doctor_data', (req, res) => {
    const sql = 'SELECT * FROM doctor_data';

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
