export function getPossibleMoves(position) {
  const possibleMoves = [];

  possibleMoves.push([position[0] + 1, position[1] + 2]);
  possibleMoves.push([position[0] + 1, position[1] - 2]);
  possibleMoves.push([position[0] + 2, position[1] + 1]);
  possibleMoves.push([position[0] + 2, position[1] - 1]);
  possibleMoves.push([position[0] - 1, position[1] - 2]);
  possibleMoves.push([position[0] - 1, position[1] + 2]);
  possibleMoves.push([position[0] - 2, position[1] - 1]);
  possibleMoves.push([position[0] - 2, position[1] + 1]);

  //Filter out invalid moves (off the board)
  for (let i = possibleMoves.length - 1; i >= 0; i--) {
    for (let j = 0; j < 2; j++) {
      if (possibleMoves[i][j] < 0 || possibleMoves[i][j] > 7) {
        possibleMoves.splice(i, 1);
        break;
      }
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

//Helper function to check if Set contains an array
export function hasArray(set, target) {
  return [...set].some((arr) =>
    arr.every((value, index) => value === target[index]),
  );
}
