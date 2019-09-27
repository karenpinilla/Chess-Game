import React, { useEffect, useState } from 'react';
import Row from '../Row/Row';

import axios from 'axios';
import './Board.module.scss';

const Board = () => {
  const [squares, setSquares] = useState([]);
  const [validMoves, setValidMoves] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(false);

  useEffect(() => {
    initialBoard();
  }, []);

  const initialBoard = () => {
    const squares = [];
    const rows = [];
    const cols = [];
    const colNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 0; i < 8; i++) {
      rows[i] = [];
      cols[i] = [];
    }

    for (let counter = 0, i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let square = {
          index: counter,
          chessId: String(colNames[j] + (8 - i)),
        };
        squares[counter] = square;
        rows[i][j] = square;
        cols[j][i] = square;
        counter++;
      }
    }
    setSquares(squares);
  };

  const getPosition = (e, chessId) => {
    e.preventDefault();

    setCurrentPosition(chessId);

    axios({
      method: 'post',
      url: '/api/position',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      data: {
        id: chessId,
      },
    })
      .then(response => {
        setValidMoves(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='main'>
      <div className='board'>
        <Row
          squares={squares}
          validMoves={validMoves}
          currentPosition={currentPosition}
          getPosition={getPosition}
        ></Row>
      </div>
    </div>
  );
};

export default Board;
