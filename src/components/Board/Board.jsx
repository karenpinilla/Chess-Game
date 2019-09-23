import React, {useEffect, useState} from "react";
import Square from '../Square/Square'

import "./Board.styles.scss";

const knight = require('../../assets/images/knight.svg')

const Board = () => {
  const [squares, setSquares]= useState([])
  const [rows, setRows] = useState([])
  const [cols, setCols] = useState([])
  const [validMoves, setValidMoves] = useState(null)
  // const [currentPlayer, setCurrentPlayer]= useState('white')

  useEffect(() => {
        initialBoard()
  },[])

  const initialBoard = () => {
    const squares = [];
    const rows = [];
    const cols = [];
    const colNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    // pre-populate rows & cols with blank arrays
    for (let i = 0; i < 8; i++) {
      rows[i] = [];
      cols[i] = [];
    }
    // fill board with squares
    for (let counter = 0, i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let square = {
          index: counter,
          chessId: String(colNames[j] + (8 - i)),
          row: i,
          col: j,
        }
        squares[counter] = square;
        rows[i][j] = square;
        cols[j][i] = square;
        counter++;
      }
    }
    setRows(rows);
    setCols(cols);
    setSquares(squares);
  }

  let squares2 = squares.map((square, index) => {
    return(
      <Square
      chessId={square.chessId}
      key={index}
      />
    )
  })

  let rows2 = [];
  let chunk = 8;
  for (let i = 0; i < squares2.length; i += chunk) {
    rows2.push(squares2.slice(i, i + chunk));
  }


  return (
    <div className="main">
      <div className="board">
      {rows2.map((row, index) => {
        return <div className="row" key={index}>{row}</div>
      })}
      </div>
    </div>
  );
};

export default Board;
