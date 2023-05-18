function generateYouTubeUrl (topic) {
    const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
    return `${YOUTUBE_API_BASE_URL}?part=snippet&q=${encodeURIComponent(topic)+'kids'}&key=${process.env.YOUTUBE_API_KEY}`
}

module.exports = {
    generateYouTubeUrl
}