import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'



function LoadingIndicator({ loading }) {
  return loading ? <img src={logo} className="App-logo" alt="logo" /> : <></>
}


function App() {
  const [activity, setActivity] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoId, setVideoId] = useState(null)
  const [topics, setTopics] = useState([])
  const [chosenTopic, setChosenTopic] = useState(null)

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

  return (
    <div className="App">
      <header className="App-header">
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
          {loading ? 'Loading...' : activity}
        </p>
      </header>
    </div>
  );
}

export default App;
