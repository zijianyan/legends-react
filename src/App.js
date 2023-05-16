import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [videoId, setVideoId] = useState('')
  const [topic, setTopic] = useState('')

  useEffect(()=> {
    setLoading(true)
    setVideoId('D9OOXCu5XMg') // temp
    axios.post('/test', { topic })
      .then((res)=> {
        console.log('res.data:', res.data)
        setText(res.data)
      })
      .then(()=> {
        setLoading(false)
      })
      .catch((err)=> {
        console.log('err:', err)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {loading ? 'Loading...' : text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       
    </div>
  );
}

export default App;
