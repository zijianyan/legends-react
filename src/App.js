import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import StartMood from './components/StartMood'
import TopicSelection from './components/TopicSelection'
import ActivityInstructions from './components/ActivityInstructions'
import EndMood from './components/EndMood'

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
  START_MOOD: 'START_MOOD',
  TOPIC_SELECTION: 'TOPIC_SELECTION',
  ACTIVITY_INSTRUCTIONS: 'ACTIVITY_INSTRUCTIONS',
  END_MOOD: 'END_MOOD'
}

const { START_MOOD, TOPIC_SELECTION, ACTIVITY_INSTRUCTIONS, END_MOOD } = PHASES

function App() {
  const [activity, setActivity] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoId, setVideoId] = useState(null)
  const [topics, setTopics] = useState([])
  const [chosenTopic, setChosenTopic] = useState(null)
  const [phase, setPhase] = useState(START_MOOD)

  useEffect(()=> {
    // setLoading(true)
    axios.get('/topics')
      .then((res)=> {
        setTopics(res.data)
      })
      .then(()=> {
        // setLoading(false)
      })
      .catch((err)=> {
        console.log('err:', err)
      }) 
  }, [])

  function handleClickStartMood(e) {
    const mood = e.target.getAttribute("data-mood");
    // post mood to some API
    // set next phase
    setPhase(TOPIC_SELECTION)
  }

  function handleClickTopic(e) {
    // if (!chosenTopic) {
      setPhase(ACTIVITY_INSTRUCTIONS)
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
    // }
  }

  function handleClickActivityFinish(e) {

    setPhase(END_MOOD)

  }

  function handleClickEndMood(e) {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phase: {phase}</h1>
        <LoadingIndicator loading={loading}/>
        {
          phase === START_MOOD
            ? <StartMood handleClickStartMood={handleClickStartMood}/>
            : <></>
        }
     
        {
          (phase === TOPIC_SELECTION && topics.length)
            ? <TopicSelection topics={topics} handleClickTopic={handleClickTopic}/>
            : <></>
        }
        {
          chosenTopic && !loading
            ? <h1>  
                Chosen topic: {chosenTopic}
              </h1>
            : <></>
        }


        {
          phase === ACTIVITY_INSTRUCTIONS
            ? <ActivityInstructions videoId={videoId} />
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
