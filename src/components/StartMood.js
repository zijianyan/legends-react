import React from 'react'

const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // width: '80vh'

}

const iconStyle = {
    height: '100px'
}

const startMoodStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export default function StartMood({ handleClickStartMood, moods }) {
    return (
        <div id="start-mood" style={startMoodStyle}>
            <h1>Hey, how's it going today?</h1>
            <ul style={listStyle}>
                {
                    moods.map(({ score, src }) => {
                        return  <li >
                                    <img src={src} data-mood={score} onClick={handleClickStartMood} style={iconStyle}/>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}