import React from 'react'
import { buttonStyle } from '../constants'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInInitial, slideInAnimate, slideInTransition, whileHover } from '../constants'


export default function ActivityInstructions ({ chosenTopic, videoId, activityText, handleClickActivityFinish }) {
    return (
        <>
            {
                activityText && videoId
                    ?   <motion.div
                            animate={slideInAnimate}
                            initial={slideInInitial}
                            transition={slideInTransition}
                            style={{ maxWidth: '560px'}}
                        >
                            <div id="activity">
                                <h1>{chosenTopic}</h1>
                                <p style={{ textAlign: 'left' }}>
                                    {activityText}
                                </p>                         
                            </div>
                            <div id="video">
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={"YouTube video player"}
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                    style={{ borderRadius: '50px'}}
                                    className="shadow"
                                >
                                </iframe>
                            </div>
                            <div id="finish-activity">
                                <h3>When you're finished, click below!</h3>
                                <motion.button whileHover={whileHover} style={{...buttonStyle, marginBottom: '100px'}} onClick={handleClickActivityFinish}>Next</motion.button>
                            </div>
                        </motion.div>
                    :   <></>
            }

           
        </>
    )
}