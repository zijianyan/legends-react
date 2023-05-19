import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInInitial, slideInAnimate, slideInTransition, whileHover } from '../constants'




export default function StartMood({ handleClickStartMood, moods }) {
    return (
        <AnimatePresence>
            <motion.div
                initial={slideInInitial}
                animate={slideInAnimate}
                transition={slideInTransition}
                exit={{
                    opacity: 0, 
                    transform: 'scale(0.5)', 
                    transition: { ease: 'easeIn', duration: 10 } 
                  }}
                id="start-mood"
            >
                <h1>Hey, how's it going today?</h1>
                <ul className="moods">
                    {
                        moods.map(({ score, src }) => {
                            return  (
                                        <motion.div
                                            animate
                                            whileHover={whileHover}>
                                            <li >
                                                <img src={src} data-mood={score} onClick={handleClickStartMood} className="icon"/>
                                            </li>

                                        </motion.div>

                                    )
                        })
                    }
                </ul>
            </motion.div>
        </AnimatePresence>
    )
}