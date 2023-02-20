const fs = require('fs');

const { connectToDatabase } = require('./index')
const { pool } = require('../database/index')


const executeSqlFile = async (filePath) => {
	try {
		const sql = fs.readFileSync(filePath).toString();
		await pool.query(sql);
		console.log(`Executed SQL file: ${filePath}`);
		pool.end()
	} catch (error) {
		console.error(`Error executing SQL file: ${filePath}\n`, error);
	}
};

const seedDatabase = async () => {
	try {
		await connectToDatabase()
		await executeSqlFile('./database/blog_seeds.sql')
	} catch (error) {
		console.log(error)
	}
}

seedDatabase()
