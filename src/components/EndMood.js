import React from 'react'


export default function EndMood ({ handleClickEndMood, moods }) {
    return (
        <>
            <h1>Congratulations!</h1>
            <h3>
                Hey, how do you feel now? Whatever you feel is OK with me.
            </h3>
            <ul>
                <li data-mood="good" onClick={handleClickEndMood}>good</li>
                <li data-mood="bad" onClick={handleClickEndMood}>bad</li>
            </ul>
        </>
    )
}