export function reconstructPath(parentDict, finalPosition) {
  const path = [];
  let move = finalPosition;

  while (move) {
    path.unshift(move);
    //Find previous move:
    move = parentDict[move];
  }
  return path;
}

export function isValid(cordinates) {
  const [x, y] = cordinates;
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}
