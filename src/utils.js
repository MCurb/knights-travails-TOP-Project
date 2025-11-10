export function getPossibleMoves(position) {
  const possibleMoves = [];
  const directions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  //Destructure and push to possibleMoves if valid move
  const [x, y] = [position[0], position[1]];

  for (const [dx, dy] of directions) {
    const move = [dx + x, dy + y];
    if (isValidMove) {
      possibleMoves.push(move);
    }
  }

  return possibleMoves;
}

export function reconstructPath(parentDict, end) {
  const path = [];
  let node = end;
  while (node) {
    path.unshift(node);

    //Find "parent" node
    node = parentDict[node];
  }

  return path;
}

function isValidMove(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}
