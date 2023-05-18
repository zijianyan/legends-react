import React from 'react'
import logo from '../logo.svg';

export default function LoadingIndicator({ loading }) {
    return loading
            ? ( <div id="loading-indicator">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>Loading...</p>
                </div>
              )
            : <></>
  }