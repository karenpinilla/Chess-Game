import React, { useState } from 'react';
import axios from 'axios';
import './square.styles.scss';

const knight = require('../../assets/images/knight.svg');

const Square = ({ chessId }) => {
  const [position, setPosition] = useState('');

  const getPosition = e => {
    event.preventDefault();

    setPosition(chessId);

    axios
      .post('/api/position', {
        position: position,
      })
      .then(response => {
        console.log('response from server', response);
      });
  };
  return (
    <div className='square' onClick={e => getPosition({ chessId })}>
      <span className='chess-id'>{chessId}</span>
    </div>
  );
};

export default Square;
