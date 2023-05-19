import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideInInitial, slideInAnimate, slideInTransition, whileHover } from '../constants'

export default function Thanks () {
    return (
        <motion.div
            initial={slideInInitial}
            animate={slideInAnimate}
            transition={slideInTransition}
        >
            <h1>Thanks.</h1>
            <p>It was great playing together.<br/>See you tomorrow!</p>
        </motion.div>
    )
}