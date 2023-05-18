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
                id="start-mood"
            >
                <motion.h1  initial={{ opacity: 0, x: 500 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}>Hey, how's it going today?</motion.h1>
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