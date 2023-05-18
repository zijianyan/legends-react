import axios from 'axios'

export function getTopics() {
    return axios.get('/topics')
        .then((res)=> {
            return res.data
        })
        .catch((err)=> console.log('err:', err)) 
}

export function getActivity(topic) {
    return axios.get(`/activity?topic=${topic}`)
        .then( res => {
            console.log('getActivity service, res.data:', res.data)
            return res.data
        })
        .catch( err => console.log('err:', err))
  }

export function postMood(mood) {
    return axios.post(`/mood`)
        .then( res => {
            console.log('res:', res)
        })  
        .catch( err => console.log('err:', err))
}