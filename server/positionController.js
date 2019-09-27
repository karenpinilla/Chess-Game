function showPossibleMoves(position, availablePositions) {
  let x = parseInt(position.substring(0, 1).charCodeAt() - 64);
  let y = parseInt(position.substring(1, 2));

  let xKey;
  let yKey;

  if (x - 1 >= 1) {
    xKey = String.fromCharCode(x - 1 + 64);
    if (y - 2 > 0) {
      yKey = (y - 2).toString();
      availablePositions.add(xKey.concat(yKey));
    }
    if (y + 2 < 9) {
      yKey = (y + 2).toString();
      availablePositions.add(xKey.concat(yKey));
    }
  }

  if (x + 1 <= 8) {
    xKey = String.fromCharCode(x + 1 + 64);
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
    xKey = String.fromCharCode(x - 2 + 64);
    if (y - 1 > 0) {
      yKey = (y - 1).toString();
      availablePositions.add(xKey.concat(yKey));
    }
    if (y + 1 < 9) {
      yKey = (y + 1).toString();
      availablePositions.add(xKey.concat(yKey));
    }
  }

  if (x + 2 <= 8) {
    xKey = String.fromCharCode(x + 2 + 64);
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
  let availablePositions = showPossibleMoves(req.body.id, new Set());
  let secondSetPositions = new Set();

  const secondTurn = positions => {
    for (let position of [...positions]) {
      showPossibleMoves(position, secondSetPositions);
    }
    return [...secondSetPositions];
  };

  res.locals.positions = secondTurn(availablePositions);
  next();
};

module.exports = { currentPosition };
