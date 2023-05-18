
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