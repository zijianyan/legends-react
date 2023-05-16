import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    axios.get('/test')
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
        <img src={logo} className="App-logo" alt="logo" />

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
