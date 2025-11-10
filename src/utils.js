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

export function isValidMove(x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}
