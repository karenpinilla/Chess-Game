const currentPosition = (req, res, next) => {
  console.log(req.body);

  //   // brute force. check all the moves and see if the square goes out of bounds
  // function knightjumps(str) {
  //     let knightMoves  = [
  //       -2, -1,    -2,  1,
  //        2,  1,     2, -1,
  //       -1,  2,    -1, -2,
  //        1,  2,     1, -2
  //      ];
  //     let counter = 0;
  //     let x = parseInt(str[1]);
  //     let y  = parseInt(str[3]);
  //     for (let i = 0; i < knightMoves.length - 1; i += 2) { // loop over the 8 possible moves
  //       if (x + knightMoves[i] > 0 && y + knightMoves[i + 1] > 0 && x + knightMoves[i] < 9 && y  + knightMoves[i + 1] < 9) {
  //         counter++;
  //       }
  //     }
  //     return counter;
  //   }

  //   // checks the position of the square instead of examining the possible moves
  //   function knightjumps(str) {
  //     let x = 1 * str[1]; // another way to parse integers
  //     let y = 1 * str[3];
  //     let spaces = 0;
  //     // check all moves going to the left 1
  //     if (x - 1 >= 1) {
  //       if (y - 2 > 0) spaces++;
  //       if (y + 2 < 9) spaces++;
  //     }
  //     // check all moves going to the left 2
  //     if (x - 2 >= 1) {
  //       if (y - 1 > 0) spaces++;
  //       if (y + 1 < 9) spaces++;
  //     }
  //     // check all moves going to the right 1
  //     if (x + 1 <= 8) {
  //       if (y - 2 > 0) spaces++;
  //       if (y + 2 < 9) spaces++;
  //     }
  //     // check all moves going to the right 2
  //     if (x + 2 <= 8) {
  //       if (y - 1 > 0) spaces++;
  //       if (y + 1 < 9) spaces++;
  //     }
  //     return spaces;
  //   }

  //   // math it up
  //   function knightjumps(str) {
  //     let x = reflect(+str[1]); // yet another way to parse integers, then reflect the coordinate
  //     let y = reflect(+str[3]);
  //     let x_distance = Math.max(3 - x, 0);
  //     let y_distance = Math.max(3 - y, 0);
  //     return 8 - distanceToValue(x_distance + y_distance);
  //   }
  //   function distanceToValue(d) {
  //     return d < 2 ? 2 * d : d + 2;
  //   }
  //   function reflect(n) {
  //     return n > 4 ? 9 - n : n;
  //   }
  next();
};

module.exports = { currentPosition };
