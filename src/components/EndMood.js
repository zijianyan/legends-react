import React from 'react'

const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80vh'
}

const iconStyle = {
    height: '100px'
}

export default function EndMood ({ handleClickEndMood, moods }) {
    return (
        <>
            <h1>Congratulations!</h1>
            <h3>
                Hey, how do you feel now? Whatever you feel is OK with me.
            </h3>
            <ul style={listStyle}>
                {
                    moods.map(({ score, src }) => {
                        return  <li >
                                    <img src={src} data-mood={score} onClick={handleClickEndMood} style={iconStyle}/>
                                </li>
                    })
                }
            </ul>
        </>
    )
}