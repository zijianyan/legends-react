import React from 'react'

export default function StartMood({ handleClickStartMood, moods }) {
    return (
        <div id="start-mood">
            <h1>Hey, how's it going today?</h1>
            <ul className="moods">
                {
                    moods.map(({ score, src }) => {
                        return  <li >
                                    <img src={src} data-mood={score} onClick={handleClickStartMood} className="icon"/>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}