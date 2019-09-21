import React, {useEffect, useState} from "react";
import Square from '../Square/Square'

import "./Board.styles.scss";

const Board = () => {
  const [squares, setSquares]= useState([])
  const [rows, setRows] = useState([])
  const [cols, setCols] = useState([])
  const [currentPlayer, setCurrentPlayer]= useState('white')
  const [validMoves, setValidMoves] = useState(null)

  useEffect(() => {
    console.log('first render, componentDidMount')
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
          piece: null
        }
        squares[counter] = square;
        rows[i][j] = square;
        cols[j][i] = square;
        counter++;
      }
    }
console.log('rows', rows)
console.log('cols', cols)
console.log('squares', squares)

    setRows(rows);
    setCols(cols);
    setSquares(squares);
  }




  // const setAdjacents = ()=> {
  //   // const {squares, rows, cols} = this.state;

  //   squares.forEach ((square) => {
  //     square.topLeft = (rows[square.row - 1] && cols[square.col - 1]) ? rows[square.row - 1][square.col - 1] : null;
  //     square.topRight = (rows[square.row - 1] && cols[square.col + 1]) ? rows[square.row - 1][square.col + 1] : null;
  //     square.bottomLeft = (rows[square.row + 1] && cols[square.col - 1]) ? rows[square.row + 1][square.col - 1] : null;
  //     square.bottomRight = (rows[square.row + 1] && cols[square.col + 1]) ? rows[square.row + 1][square.col + 1] : null;
  //   });

  //   setSquares({squares: squares});
  // }


  return (

    <div className="lists">
      <div className="list-wrapper">
      <Square>{cols}</Square>
      </div>
    </div>
  );
};

export default Board;
