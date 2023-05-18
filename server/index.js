
require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')

const { TOPIC_PROMPT, ACTIVITY_PROMPT } = require('./constants/prompts')
const { YOUTUBE_API_BASE_URL } = require('./api/youtube')
const openai = require('./api/openai')

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening on port ${port}`))

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('/topics', async (req, res, next)=> {
    try {
        const response = await openai.createCompletion({ // query openai for topics

            model: "text-davinci-003",
            prompt: TOPIC_PROMPT,
            temperature: 1,
            max_tokens: 1000,
            n: 5
        })
        const { choices } = response?.data
        res.send(choices)
    } catch (err) {
        console.log('err:', err)
    }
})


app.get('/activity', async (req, res, next)=> {
    const { topic } = req.query
    try {
        const response = await openai.createCompletion({ // query openai for activity using topic
            model: "text-davinci-003",
            prompt: ACTIVITY_PROMPT + topic,
            temperature: 0.5,
            max_tokens: 1000,   
          });
        
        const youtube = await axios.get(`${YOUTUBE_API_BASE_URL}?part=snippet&q=${encodeURIComponent(topic)+'kids'}&key=${process.env.YOUTUBE_API_KEY}`) // search youtube for video using topic
        const videoId = youtube.data.items[0].id.videoId
        const activityText = response?.data?.choices[0].text
        res.send({
            activityText,
            videoId
        })
    } catch (err) {
        console.log('err:', err)
        res.send(err)
    }
})

app.post('/mood', (req, res, next)=> {
    const mood = req.body
    console.log('mood:', mood)
    // save mood to database here with userId, chosenTopic, activityText, and phase: start | end
    res.status(201).send(mood)
})

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})
