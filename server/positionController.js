const currentPosition = (req, res, next) => {
  console.log(req.body);

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

    let x = letterToNum[str[0]];
    let y = 1 * str[1];
    let xKey;
    let yKey;
    let availablePositions = [];
    // check all moves going to the left 1
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
    // check all moves going to the left 2
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
    // check all moves going to the right 1
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
    // check all moves going to the right 2
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

  const getByValue = (map, searchValue) => {
    for (let [key, value] of Object.entries(map)) {
      if (value === searchValue) return key;
    }
  };

  next();
};

module.exports = { currentPosition };
