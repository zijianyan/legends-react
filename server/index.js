
require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const functions = require('firebase-functions')
const cors = require('cors');
const axios = require('axios')

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const VIDEO_ID = 'D9OOXCu5XMg'

const ACTIVITY_PROMPT = `
Describe to me an activity or mental exercise for a child that will boost their self-esteem;
Say it as if you were speaking to the child directly;
Have a sense of humor;
Make the activity something that requires the child's imagination;
This activity should also be about `

const TOPIC_PROMPT = `
Give me a fun topic for kids;
The topic should be very specific, but described in 4 words max;
Make it a bit quirky;
Max 1 topic;
`

console.log('process.env.YOUTUBE_API_KEY:', process.env.YOUTUBE_API_KEY)


app.use(cors({ origin: true }));

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})

app.use(express.json()); //Used to parse JSON bodies
app.use(express.static(path.join(__dirname, '..', 'build')))

app.get('/topics', async (req, res, next)=> {
    try {
        // call open ai for topics
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: TOPIC_PROMPT,
            // temperature: 0,
            max_tokens: 1000,
            n: 4
        })
        // console.log('response:', response)
        const { choices } = response?.data
        console.log('choices:', choices)
        // const { text } = response?.data?.choices[0]

        res.send(choices)
    } catch (err) {
        console.log('err:', err)
    }
})


app.post('/activity', async (req, res, next)=> {
    console.log('req.body:', req.body)
    const topic = req.body.topic

    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: ACTIVITY_PROMPT + topic,
            // temperature: 0,
            max_tokens: 1000,   
          });
    
          
    
    
        const youtube = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(req.body.topic)+'kids'}&key=${process.env.YOUTUBE_API_KEY}`, {
            // headers: {
            //     'Authorization': `Bearer ${process.env.YOUTUBE_API_KEY}` 
            // }
        })
        console.log('youtube:', youtube)

        // axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(req.body.topic)}&key=${process.env.YOUTUBE_API_KEY}`)
        //   .then( res => {
        //     console.log('youtube res:', res)
        //   })
        //   .catch(err => console.log('err:', err))

        const videoId = youtube.data.items[0].id.videoId
    
        const activity = response?.data?.choices[0].text
        res.send({
            activity,
            videoId
            // videoId: 'D9OOXCu5XMg' // temp
        })

    } catch (err) {
        console.log('err:', err)
        res.send(err)
    }


})

app.get('/video', (req, res, next) => {
    console.log('req.query:', req.query)
    // const { text } = req.query

    // const YOUTUBE_API = 'https://www.googleapis.com/youtube/v3/search'

    console.log('req.query.text:', req.query.text)

    // const textURIEncoded = encodeURIComponent(text)

    // const youTubeAPI = `${YOUTUBE_API}?q=${textURIEncoded}`

    // console.log('textURIEncoded:', textURIEncoded)

    // const youTubeAPI = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(req.query.text)}`

    // console.log('process.env.YOUTUBE_API_KEY:', process.env.YOUTUBE_API_KEY)
    // axios.get(youTubeAPI, {
    //     headers: {
    //         'Authorization': `Bearer ${process.env.YOUTUBE_API_KEY}`
    //     }
    // })
    // .then( _res => {
    //     console.log('_res:', _res)
    //     res.send(_res)
    // })
    // .catch( err => console.log('err:', err))


    res.send('D9OOXCu5XMg')    

})

// app.post('/test', async (req, res, next)=> {
//     console.log('req.body:', req.body)
//     const { topic } = req.body
//     console.log('topic:', topic)
//     try {
 




//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: ACTIVITY_PROMPT + topic,
//             // temperature: 0,
//             max_tokens: 1000,   
//           });

//         const { text } = response?.data?.choices[0]
//         res.send(text)
//     } catch(err) {
//         res.send(err)
//     }

// })

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

exports.app = functions.https.onRequest(app)