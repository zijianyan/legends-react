import React from 'react'

export default function StartMood({ handleClickStartMood }) {
    return (
        <div id="pre-activity">
            <h1>Hey, how's it going today?</h1>
            <ul>
            <li data-mood="good" onClick={handleClickStartMood}>good</li>
            <li data-mood="bad" onClick={handleClickStartMood}>bad</li>
            </ul>
        </div>
    )
}