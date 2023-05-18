import React from 'react'

export default function StartMood({ handleClickMood }) {
    return (
        <div id="pre-activity">
            <h2>Hey, how's it going today?</h2>
            <ul>
            <li data-mood="good" onClick={handleClickMood}>good</li>
            <li data-mood="bad" onClick={handleClickMood}>bad</li>
            </ul>
        </div>
    )
}