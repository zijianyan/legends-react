import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInInitial, slideInAnimate, slideInTransition, whileHover, buttonStyle } from '../constants'


export default function TopicSelection ({ topics, handleClickTopic }) {
    return (
        <motion.div initial={slideInInitial}
        animate={slideInAnimate}
        transition={slideInTransition}>
        <h1>Got it.</h1>
        <h3>Well let's do something with those feelings.<br/>What sounds fun?</h3>
        <ul>
            {
                topics.map( topic => 
                    <motion.li
                        whileHover={whileHover}
                        >
                       <button
                            onClick={handleClickTopic}
                            data-text={topic.text}
                            style={buttonStyle}
                       >
                        {topic.text}

                        </button>
                    </motion.li>)
            }
        </ul>
        </motion.div>
    )
}