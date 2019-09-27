import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Square from '../Square/Square';

import './Board.styles.scss';

const Board = () => {
  const [squares, setSquares] = useState([]);
  const [validMoves, setValidMoves] = useState([]);
  const [knight, setKnight] = useState(false);

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
          row: i,
          col: j,
          possiblePosition: false,
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

    axios({
      method: 'post',
      url: '/api/position',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      data: {
        id: chessId,
      },
    }).then(response => {
      setValidMoves(response.data);
    });
    setKnight(!knight);
  };

  //an array of 64 square react components
  let allSquares = squares.map((square, index) => {
    return (
      <Square
        on={validMoves.includes(square.chessId)}
        getPosition={getPosition}
        chessId={square.chessId}
        key={index}
      />
    );
  });

  let allRows = [];
  let chunk = 8;
  for (let i = 0; i < allSquares.length; i += chunk) {
    allRows.push(allSquares.slice(i, i + chunk));
  }

  for (let i = 0; i < validMoves.length; i++) {}

  return (
    <div className='main'>
      <div className='board'>
        {allRows.map((row, index) => {
          return (
            <div className='row' key={index}>
              {row}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
