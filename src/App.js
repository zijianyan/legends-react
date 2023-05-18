import './App.css';
import React, { useEffect, useState } from 'react'

import StartMood from './components/StartMood'
import TopicSelection from './components/TopicSelection'
import ActivityInstructions from './components/ActivityInstructions'
import EndMood from './components/EndMood'
import Thanks from './components/Thanks'
import LoadingIndicator from './components/LoadingIndicator';

import { getTopics, getActivity, postMood } from './services'
import { PHASES } from './constants'

const {
  START_MOOD,
  TOPIC_SELECTION,
  ACTIVITY_INSTRUCTIONS,
  END_MOOD,
  THANKS
} = PHASES

function App() {
  const [activityText, setActivityText] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoId, setVideoId] = useState(null)
  const [topics, setTopics] = useState([])
  const [chosenTopic, setChosenTopic] = useState(null)
  const [phase, setPhase] = useState(START_MOOD)

  useEffect( async ()=> { // init
   const topics = await getTopics()
   setTopics(topics)
  }, [])

  async function handleClickStartMood(e) {
    const mood = e.target.getAttribute("data-mood");
    await postMood(mood)
    setPhase(TOPIC_SELECTION)
  }

  async function handleClickTopic(e) {
      setPhase(ACTIVITY_INSTRUCTIONS)
      setLoading(true)
      const topic = e.target.getAttribute("data-text");
      setChosenTopic(topic)
      const activity = await getActivity(topic)
      const { videoId, activityText } = activity
      setActivityText(activityText)
      setVideoId(videoId)
      setLoading(false)
  }

  function handleClickActivityFinish(e) {
    setPhase(END_MOOD)
  }

  async function handleClickEndMood(e) {
    const mood = e.target.getAttribute("data-mood");
    await postMood(mood)
    setPhase(THANKS)
  }

  return (
    <div className="App">
      <header className="App-header">
        <LoadingIndicator loading={loading}/>
        {
          phase === START_MOOD
            ? <StartMood
                handleClickStartMood={handleClickStartMood}
              />
            : <></>
        }
     
        {
          (phase === TOPIC_SELECTION && topics.length)
            ? <TopicSelection
                topics={topics}
                handleClickTopic={handleClickTopic}
              />
            : <></>
        }

        {
          phase === ACTIVITY_INSTRUCTIONS
            ? <ActivityInstructions
                chosenTopic={chosenTopic}
                videoId={videoId}
                activityText={activityText}
                handleClickActivityFinish={handleClickActivityFinish}
              />
            : <></>
        }

        {
          phase === END_MOOD
            ? <EndMood handleClickEndMood={handleClickEndMood}/>
            : <></>
        }

        {
          phase === THANKS
            ? <Thanks />
            : <></>
        }

      </header>
    </div>
  );
}

export default App;
