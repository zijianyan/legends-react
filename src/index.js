import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom'

import './fonts/MensaExpanded/Mensa-Expanded-W01-Medium.otf'
import './fonts/MensaExpanded/Mensa-Expanded-W01-Regular.otf'
import './fonts/MensaExpanded/Mensa-Expanded-W01-Bold.otf'
import './fonts/Mensa/Mensa-W01-Bold.otf'
import './fonts/Mensa/Mensa-W01-Medium.otf'
import './fonts/Mensa/Mensa-W01-Regular.otf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
