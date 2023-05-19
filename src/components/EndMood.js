import React from 'react'

export default function EndMood ({ handleClickEndMood, moods }) {
    return (
        <>
            <h1>Congratulations!</h1>
            <h3>
                Hey, how do you feel now?<br/>Whatever you feel is OK with me.
            </h3>
            <ul className="moods">
                {
                    moods.map(({ score, src }) => {
                        return  <li >
                                    <img src={src} data-mood={score} onClick={handleClickEndMood} className="icon"/>
                                </li>
                    })
                }
            </ul>
        </>
    )
}