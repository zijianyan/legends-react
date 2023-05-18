import React from 'react'

export default function TopicSelection ({ topics, handleClickTopic }) {
    return (
        <>
        <h1>Got it.</h1>
        <h3>Well let's do something with those feelings. What sounds fun?</h3>
        <ul>
         {topics.map( topic => <li onClick={handleClickTopic} data-text={topic.text}>{topic.text}</li>)}
        </ul>
        </>
    )
}