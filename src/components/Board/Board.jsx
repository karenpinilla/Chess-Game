import React, { useEffect, useState } from 'react';
import Square from '../Square/Square';
import axios from 'axios';
import './Board.module.scss';

const Board = () => {
  const [squares, setSquares] = useState([]);
  const [validMoves, setValidMoves] = useState([]);
  // const [knight, setKnight] = useState(false);
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
    })
      .then(response => {
        setValidMoves(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    // setKnight(!knight);
    setCurrentPosition(chessId);
  };

  let allSquares = squares.map((square, index) => {
    return (
      <Square
        on={validMoves.includes(square.chessId)}
        knight={square.chessId === currentPosition}
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
