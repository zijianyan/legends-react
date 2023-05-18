import React from 'react'

export default function StartMood({ handleClickStartMood, moods }) {
    return (
        <div id="pre-activity">
            <h1>Hey, how's it going today?</h1>
            <ul>
                {
                    moods.map(({ score, src }) => {
                        return  <li data-mood={score} onClick={handleClickStartMood}>
                                    <img src={src} height="100px"/>
                                    <p>{score}</p>
                                </li>
                    })
                }
                <li data-mood="good" onClick={handleClickStartMood}>good</li>
                <li data-mood="bad" onClick={handleClickStartMood}>bad</li>
            </ul>
        </div>
    )
}