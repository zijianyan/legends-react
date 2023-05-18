import axios from 'axios'

export function getTopics() {
    return axios.get('/topics')
      .then((res)=> {
        // setTopics(res.data)
        return res.data
      })
      .catch((err)=> {
        console.log('err:', err)
      }) 
}

export function getActivity(topic) {
    return axios.get(`/activity?topic=${topic}`)
      .then( res => {
        // const { activity, videoId } = res.data
        // setActivity(activity)
        // setVideoId(videoId)
        console.log('getActivity service, res.data:', res.data)
        return res.data
      })
    //   .then(() => {
    //     setLoading(false)
    //   })
      .catch( err => console.log('err:', err))
  }