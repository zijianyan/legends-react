
const express = require('express')
const app = express()
const path = require('path')
const functions = require('firebase-functions')
const cors = require('cors');

app.use(cors({ origin: true }));

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

exports.app = functions.https.onRequest(app)