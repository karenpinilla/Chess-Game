import React from 'react';
import Knight from '../Knight/Knight';

import './Square.styles.scss';

const Square = ({ on, getPosition, chessId }) => {
  return (
    <div className={on ? 'highlighted' : 'square'} onClick={e => getPosition(e, chessId)}>
      <span className='chess-id'>{chessId}</span>
    </div>
  );
};

export default Square;
