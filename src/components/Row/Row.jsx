import React from 'react';
import Square from '../Square/Square';

import './Row.module.scss';

const Row = ({ validMoves, currentPosition, squares, getPosition }) => {
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

  return (
    <>
      {allRows.map((row, index) => {
        return (
          <div className='row' key={index}>
            {row}
          </div>
        );
      })}
    </>
  );
};

export default Row;
