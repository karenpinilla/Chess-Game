import React from 'react';
import Knight from '../Knight/Knight';

import './Square.module.scss';

const Square = ({ on, knight, getPosition, chessId }) => {
  return (
    <div className={on ? 'highlighted' : 'square'} onClick={e => getPosition(e, chessId)}>
      <span className={knight ? 'knight chess-id' : 'chess-id'}>{chessId}</span>
    </div>
  );
};

export default Square;
