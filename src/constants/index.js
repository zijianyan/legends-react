
import mood0 from '../0.svg'
import mood25 from '../25.svg'
import mood50 from '../50.svg'
import mood75 from '../75.svg'
import mood100 from '../100.svg'

export const MOODS = [
  {
    src: mood0,
    score: 0
  },
  {
    src: mood25,
    score: 25
  },
  {
    src: mood50,
    score: 50
  },
  {
    src: mood75,
    score: 75
  },
  {
    src: mood100,
    score: 100
  },
]

export const PHASES = {
  START_MOOD: 'START_MOOD',
  TOPIC_SELECTION: 'TOPIC_SELECTION',
  ACTIVITY_INSTRUCTIONS: 'ACTIVITY_INSTRUCTIONS',
  END_MOOD: 'END_MOOD',
  THANKS: 'THANKS'
}

export const LOADING_MESSAGES = [
  "summoning the unicorns",
  "planting the flowers",
  "chasing some rainbows",
  "feeding the dragons"
]

export const slideInInitial = { opacity: 0, x: 500 }
export const slideInAnimate = { opacity: 1, x: 0 }
export const slideInTransition = { duration: 0.5 }
export const whileHover = {
  scale: 1.3,
  transition: { duration: 0.2 },
}

export const buttonStyle = {
  height: '3rem',
  fontFamily: 'MensaExpandedMedium',
  backgroundColor: 'rgb(31, 31, 31)',
  border: 'none',
  borderRadius: '50px',
  color: 'white',
  padding: '0px 50px',
  fontSize: 'large',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px',
  margin: '10px'
}


