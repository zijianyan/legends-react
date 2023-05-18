import React from 'react'

export default function TopicSelection ({ topics, handleClickTopic }) {
    return (
        <>
        <ul>
         {topics.map( topic => <li onClick={handleClickTopic} data-text={topic.text}>{topic.text}</li>)}
        </ul>
        </>
    )
}