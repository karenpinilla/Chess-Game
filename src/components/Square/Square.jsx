import React, { useState } from 'react';
import Knight from '../Knight/Knight';
import axios from 'axios';

import './Square.styles.scss';

const Square = ({ chessId }) => {
  const [active, setActive] = useState(false);

  const getPosition = chessId => {
    event.preventDefault();

    axios({
      method: 'post',
      url: '/api/position',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      data: {
        id: chessId,
      },
    }).then(response => {
      console.log('response from server', response.data);
    });

    setActive(!active);
  };

  return (
    <div className='square' onClick={e => getPosition(chessId)}>
      <span className='chess-id'>{chessId}</span>
    </div>
  );
};

export default Square;
