
require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ACTIVITY_PROMPT = `
Describe to me an activity for a kid that will boost their self-esteem;
Say it as if you were speaking to the child directly;
Have a sense of humor;
Make the activity something that invites the child's to use their imagination or creativity;
Start off this text with "Great choice!";
Be optimistic and encouraging;
This activity should be about `

const TOPIC_PROMPT = `
Give me a fun topic for kids;
The topic should be very specific activity, but described in 5 words max;
Make it a bit quirky;
Max 1 topic;
The should not be a topic that has been provided in the past 10 requests;
Remove all quotation marks or punctuation;
Remove all periods or "." from the text;
`

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}`))

app.use(express.json()); //Used to parse JSON bodies
app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('/topics', async (req, res, next)=> {
    try {
        // call open ai for topics
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: TOPIC_PROMPT,
            temperature: 1,
            max_tokens: 1000,
            n: 4
        })
        const { choices } = response?.data
        res.send(choices)
    } catch (err) {
        console.log('err:', err)
    }
})


app.post('/activity', async (req, res, next)=> {
    const topic = req.body.topic
    try {
        // call openai for activity using topic
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: ACTIVITY_PROMPT + topic,
            temperature: 0.2,
            max_tokens: 1000,   
          });
    
        // search youtube for video using topic
        const youtube = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(req.body.topic)+'kids'}&key=${process.env.YOUTUBE_API_KEY}`)

        const videoId = youtube.data.items[0].id.videoId
    
        const activity = response?.data?.choices[0].text
        res.send({
            activity,
            videoId
        })

    } catch (err) {
        console.log('err:', err)
        res.send(err)
    }
})

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})
