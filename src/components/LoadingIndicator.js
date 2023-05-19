import React from 'react'
// import logo from '../logo.svg';
import logo from '../nyancat.svg';

import { LOADING_MESSAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion'
import { slideInInitial, slideInAnimate, slideInTransition, whileHover, buttonStyle } from '../constants'

function chooseRandom (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export default function LoadingIndicator({ loading }) {
    return loading
            ? ( <motion.div
                  id="loading-indicator"
                  initial={slideInInitial}
                  animate={slideInAnimate}
                  transition={slideInTransition}
                >
                  <img src={logo} className="App-logo" alt="logo" />
                  <h3>{`Hang on - ${chooseRandom(LOADING_MESSAGES)}...`}</h3>
                </motion.div>
              )
            : <></>
  }