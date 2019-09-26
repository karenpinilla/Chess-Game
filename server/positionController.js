//func to calculate available positions
//array of positions

const currentPosition = (req, res, next) => {
  //func to determine positions
  //based on count
  //loop through array of positions
  const knightPositions = position => {
    const letterToNum = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
    };
    //create another object number : letter
    const numToLetter = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
      5: 'E',
      6: 'F',
      7: 'G',
      8: 'H',
    };

    let x = letterToNum[str[0]];
    let y = 1 * str[1];
    let xKey;
    let yKey;
    let availablePositions = [];

    if (x - 1 >= 1) {
      if (y - 2 > 0) {
        xKey = getByValue(letterToNum, x - 1);
        yKey = (y - 2).toString();
        availablePositions.push(xKey.concat(yKey));
      }
      if (y + 2 < 9) {
        yKey = (y + 2).toString();
        availablePositions.push(xKey.concat(yKey));
      }
    }

    if (x - 2 >= 1) {
      if (y - 1 > 0) {
        xKey = getByValue(letterToNum, x - 2);
        yKey = (y - 1).toString();
        availablePositions.push(xKey.concat(yKey));
      }
      if (y + 1 < 9) {
        yKey = (y + 1).toString();
        availablePositions.push(xKey.concat(yKey));
      }
    }

    if (x + 1 <= 8) {
      if (y - 2 > 0) {
        xKey = getByValue(letterToNum, x + 1);
        yKey = (y - 2).toString();
        availablePositions.push(xKey.concat(yKey));
      }
      if (y + 2 < 9) {
        yKey = (y + 2).toString();
        availablePositions.push(xKey.concat(yKey));
      }
    }

    if (x + 2 <= 8) {
      if (y - 1 > 0) {
        xKey = getByValue(letterToNum, x + 2);
        yKey = (y - 1).toString();
        availablePositions.push(xKey.concat(yKey));
      }
      if (y + 1 < 9) {
        yKey = (y + 1).toString();
        availablePositions.push(xKey.concat(yKey));
      }
    }
    return availablePositions;
  };

  // const getByValue = (map, searchValue) => {
  //   for (let [key, value] of Object.entries(map)) {
  //     if (value === searchValue) return key;
  //   }
  // };

  let availablePositions = knightPositions(req.body.id);

  next(availablePositions);
};

module.exports = { currentPosition };
