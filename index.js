const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 8080, () => {
	console.log('Server is Connected!');
});

const connection = mysql.createConnection({
	host: process.env.HOST,
	user: process.env.USERNAME,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	port: process.env.DB_PORT,
});

app.get('/test', (req, res) => {
	res.send('Hello sir');
	console.log('This is pretty cool');
});

app.get('/users', (req, res) => {
	connection.query('SELECT * FROM userInfo', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

//creating post method for inserting data from frontend
app.post('/add', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	connection.query(
		'INSERT INTO userInfo (email, password) VALUES (?,?)',
		[email, password],
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send('table updated');
			}
		}
	);
});
// SPECIFYING IF CONNECTION TO OUR DATABASE IS SUCCESSFUL OR UNSUCCESSFUL
connection.connect((err) => {
	if (err) {
		console.log(err.message);
	}
	console.log('AWS is LIT');
});
