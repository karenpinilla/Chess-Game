import React from 'react'

import './square.styles.scss'


const Square = ({chessId})=> {

    console.log('squares', chessId)
    return (
        <div className="square">
            <span className="chess-id">
            {chessId}
            </span>
        </div>
    )
}

export default Square