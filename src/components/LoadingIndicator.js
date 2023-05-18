import React from 'react'
// import logo from '../logo.svg';
import logo from '../nyancat.svg';

import { LOADING_MESSAGES } from '../constants';

function chooseRandom (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export default function LoadingIndicator({ loading }) {
    return loading
            ? ( <div id="loading-indicator">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h3>{`Hang on - ${chooseRandom(LOADING_MESSAGES)}...`}</h3>
                </div>
              )
            : <></>
  }