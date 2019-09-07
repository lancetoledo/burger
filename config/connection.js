var mysql = require('mysql');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'password',
		database: 'burgers_db'
	})
};

// Connection to MySQL
connection.connect()

module.exports = connection;
