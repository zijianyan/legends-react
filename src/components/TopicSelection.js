import React from 'react'

export default function TopicSelection ({ topics, handleClickTopic }) {
    return (
        <>
        <h3>Got it. Well let's take those feelings and do something fun. What activity would you like to try today?</h3>
        <ul>
         {topics.map( topic => <li onClick={handleClickTopic} data-text={topic.text}>{topic.text}</li>)}
        </ul>
        </>
    )
}