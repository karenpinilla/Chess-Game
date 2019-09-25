import React, { useEffect, useState } from 'react';
import Square from '../Square/Square';

import './Board.styles.scss';

const Board = () => {
  const [squares, setSquares] = useState([]);
  // const [validMoves, setValidMoves] = useState(null);
  // const [currentPlayer, setCurrentPlayer]= useState('white')

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
        };
        squares[counter] = square;
        rows[i][j] = square;
        cols[j][i] = square;
        counter++;
      }
    }
    setSquares(squares);
  };

  let allSquares = squares.map((square, index) => {
    return <Square chessId={square.chessId} key={index} />;
  });

  let allRows = [];
  let chunk = 8;
  for (let i = 0; i < allSquares.length; i += chunk) {
    allRows.push(allSquares.slice(i, i + chunk));
  }

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
