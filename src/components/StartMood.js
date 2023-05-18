import React from 'react'



const listStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}

// const listItemStyle = {
//     height: '100px'
// }

const iconStyle = {
    height: '100px'
}


export default function StartMood({ handleClickStartMood, moods }) {
    return (
        <div id="pre-activity">
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