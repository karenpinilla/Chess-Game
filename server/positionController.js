function knightPositions(position, availablePositions) {
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

  let x = letterToNum[position[0]];
  let y = 1 * position[1];
  let xKey;
  let yKey;

  if (x - 1 >= 1) {
    xKey = numToLetter[x - 1];
    if (y - 2 > 0) {
      yKey = (y - 2).toString();
      availablePositions.add(xKey.concat(yKey));
    }
    if (y + 2 < 9) {
      yKey = (y + 2).toString();
      availablePositions.add(xKey.concat(yKey));
    }
  }

  if (x - 2 >= 1) {
    xKey = numToLetter[x - 2];
    if (y - 1 > 0) {
      yKey = (y - 1).toString();
      availablePositions.add(xKey.concat(yKey));
    }
    if (y + 1 < 9) {
      yKey = (y + 1).toString();
      availablePositions.add(xKey.concat(yKey));
    }
  }

  if (x + 1 <= 8) {
    xKey = numToLetter[x + 1];
    if (y - 2 > 0) {
      yKey = (y - 2).toString();
      availablePositions.add(xKey.concat(yKey));
    }
    if (y + 2 < 9) {
      yKey = (y + 2).toString();
      availablePositions.add(xKey.concat(yKey));
    }
  }

  if (x + 2 <= 8) {
    xKey = numToLetter[x + 2];
    if (y - 1 > 0) {
      yKey = (y - 1).toString();
      availablePositions.add(xKey.concat(yKey));
    }
    if (y + 1 < 9) {
      yKey = (y + 1).toString();
      availablePositions.add(xKey.concat(yKey));
    }
  }
  return availablePositions;
}

const currentPosition = (req, res, next) => {
  let availablePositions = knightPositions(req.body.id, new Set());
  let secondSetPositions = new Set();

  const secondTurn = positions => {
    for (let position of [...positions]) {
      knightPositions(position, secondSetPositions);
    }
    return [...secondSetPositions];
  };

  res.locals.positions = secondTurn(availablePositions);
  next();
};

module.exports = { currentPosition };
