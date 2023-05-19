import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInInitial, slideInAnimate, slideInTransition, whileHover } from '../constants'



export default function EndMood ({ handleClickEndMood, moods }) {
    return (
        <motion.div
            initial={slideInInitial}
            animate={slideInAnimate}
            transition={slideInTransition}
        >
            <h1>Congratulations!</h1>
            <h3>
                Hey, how do you feel now?<br/>Whatever you feel is OK with me.
            </h3>
            <ul className="moods">
                {
                    moods.map(({ score, src }) => {
                        return  <motion.li whileHover={whileHover}>
                                    <img src={src} data-mood={score} onClick={handleClickEndMood} className="icon"/>
                                </motion.li>
                    })
                }
            </ul>
        </motion.div>
    )
}