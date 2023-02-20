const { Pool } = require('pg')

const {
	DB_NAME,
	DB_HOST,
	DB_USER,
	DB_PORT,
	DB_PASSWORD,
	DB_URL } = require('../util/config')

const pool = new Pool({
	database: 'railway',
	host: 'containers-us-west-191.railway.app',
	port: 6172,
	user: 'postgres',
	password: '3UG5EmIbMsYruzGCWbbD',
	connectionString: 'postgresql://postgres:3UG5EmIbMsYruzGCWbbD@containers-us-west-191.railway.app:6172/railway',
	// database: DB_NAME,
	// host: DB_HOST,
	// port: DB_PORT,
	// user: DB_USER,
	// password: DB_PASSWORD,
	// connectionString: DB_URL,
})

const connectToDatabase = async () => {
	pool.connect((err) => {
		if (err) {
			console.log('failed to connect to database', err)
		} else {
			console.log("Connected to database")
		}
	})
}

const initializeDatabase = async () => {

	// blogs table
	pool.query(`
	CREATE TABLE IF NOT EXISTS blogs (
		id SERIAL PRIMARY KEY,
		title VARCHAR(255) NOT NULL,
		content TEXT NOT NULL,
		description VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT NOW()
	  );`)
}

module.exports = { connectToDatabase, initializeDatabase, pool }
