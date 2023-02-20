const express = require('express')
const app = express()
const { connectToDatabase, initializeDatabase } = require('./database/index')
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')


require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use('/api/blogs', blogsRouter)

const start = async () => {
	const PORT = process.env.PORT || 3001
	await connectToDatabase()
	await initializeDatabase()
	app.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
	});
}

start()