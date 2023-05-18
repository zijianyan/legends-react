import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'



function LoadingIndicator({ loading }) {
  return loading
          ? ( <div id="loading-indicator">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Loading...</p>
              </div>
            )
          : <></>
}

const PHASES = {
  PRE_ACTIVITY: 'PRE_ACTIVITY',
  ACTIVITY: 'ACTIVITY',
  POST_ACTIVITY: 'POST_ACTIVITY'
}

const { PRE_ACTIVITY, ACTIVITY, POST_ACTIVITY } = PHASES

function App() {
  const [activity, setActivity] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoId, setVideoId] = useState(null)
  const [topics, setTopics] = useState([])
  const [chosenTopic, setChosenTopic] = useState(null)
  const [phase, setPhase] = useState(PRE_ACTIVITY)

  useEffect(()=> {
    setLoading(true)
    axios.get('/topics')
      .then((res)=> {
        setTopics(res.data)
      })
      .then(()=> {
        setLoading(false)
      })
      .catch((err)=> {
        console.log('err:', err)
      }) 
  }, [])

  function handleClickTopic(e) {
    if (!chosenTopic) {
      setLoading(true)
      const topic = e.target.getAttribute("data-text");
  
      setChosenTopic(topic)

      axios.post(`/activity`, {
        topic
      })
      .then( res => {
        const { activity, videoId } = res.data
        setActivity(activity)
        setVideoId(videoId)
      })
      .then(() => {
        setLoading(false)
      })
      .catch( err => console.log('err:', err))

    }
  }

  function handleClickPreActivity(e) {
    const mood = e.target.getAttribute("data-mood");
    // post mood to some API
    // set next phase
    setPhase(ACTIVITY)
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          phase === PRE_ACTIVITY
            ? (
                <div id="pre-activity">
                  <h2>Hey, how's it going today?</h2>
                  <ul>
                    <li data-mood="good" onClick={handleClickPreActivity}>good</li>
                    <li data-mood="bad" onClick={handleClickPreActivity}>bad</li>
                  </ul>
                </div>
              )
            : <></>
            }
        {
          chosenTopic && !loading
            ? <h1>  
                Chosen topic: {chosenTopic}
              </h1>
            : <></>
        }
        <LoadingIndicator loading={loading}/>
        {
          videoId
            ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            : <></>
        }
        {
          topics.length && !loading && !chosenTopic
            ? <h2>Topics:</h2>
            : <></>
        }
        {
          !chosenTopic && !loading
            ? <ul>
                {topics.map( topic => <li onClick={handleClickTopic} data-text={topic.text}>{topic.text}</li>)}
              </ul>
            : <></>
        }
        <p>
          {activity}
        </p>
      </header>
    </div>
  );
}

export default App;
