import React from 'react';
import Knight from '../../assets/images/knight-piece.png';

import './Square.module.scss';

const Square = ({ on, knight, getPosition, chessId }) => {
  return (
    <div className={on ? 'highlight' : 'square'} onClick={e => getPosition(e, chessId)}>
      <span className='chess-id'>
        {chessId}
        {knight ? <img src={Knight} className='knightImg' /> : null}
      </span>
    </div>
  );
};

export default Square;
