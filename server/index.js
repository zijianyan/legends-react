
require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const functions = require('firebase-functions')
const cors = require('cors');

app.use(cors({ origin: true }));


const PROMPT = `
Describe to me an activity or mental exercise for a child that will boost their self-esteem.
Say it as if you were speaking to the child directly.
Have a sense of humor.
Make the activity something that requires the child's imaginatio.
`

console.log('process.env.OPENAI_API_KEY:', process.env.OPENAI_API_KEY)


const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('/test', async (req, res, next)=> {

    try {
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: PROMPT,
            // temperature: 0,
            max_tokens: 1000,   
          });

        const { text } = response?.data?.choices[0]
        res.send(text)
    } catch(err) {
        res.send(err)
    }

})

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

exports.app = functions.https.onRequest(app)