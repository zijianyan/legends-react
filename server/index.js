
const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const path = require('path')

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})


app.use(express.static(path.join(__dirname, '..', 'build')))


app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})
