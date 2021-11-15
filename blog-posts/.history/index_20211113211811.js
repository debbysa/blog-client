const express = require('express')
const { randomByte } = require('crypto')

const app = express()

app.use(express.json())

const posts = {}

app.get('/posts', (req, res) => {
	res.send(posts)
})

app.post('/posts', (req, res) => {
	const id = randomByte(4).toString('hex')
	const { title } = req.body

	posts[id] = {
		id,
		title,
	}

	res.status(201).send(posts[id])
})

app.listen(4000, () => {
	console.log('listening on 4000')
})