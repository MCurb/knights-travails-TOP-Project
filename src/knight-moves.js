import { reconstructPath, isValid } from './utils';
import { Queue } from './queue';

export function knightMoves(start, end) {
  //Track parents to reconstruct path later
  const parentDict = {};

  let path;
  const queue = new Queue();
  const visited = new Set();

  //Init
  queue.enqueue(start);
  parentDict[start] = null;

  while (!queue.isEmpty()) {
    const position = queue.dequeue();
    const [x, y] = position;

    //If end position is found, reconstruct path
    if (x === end[0] && y === end[1]) {
      path = reconstructPath(parentDict, end);
      break;
    }

    //If node hasn't been visited yet:
    const positionString = position.toString();

    if (!visited.has(positionString)) {
      visited.add(positionString);

      for (const [dx, dy] of [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
      ]) {
        //Calculate possible move
        const move = [x + dx, y + dy];

        if (isValid(move)) {
          queue.enqueue(move);

          //Remember parent of the possible move
          if (!(move in parentDict)) {
            parentDict[move] = position;
          }
        }
      }
    }
  }

  return path;
}
