import { reconstructPath, isValidMove } from './utils';
import { Queue } from './queue';

export function knightMoves(start, end) {
  let path;
  const queue = new Queue();
  const visitedPositions = new Set();
  //Track parents to reconstruct path later
  const parentDict = {};

  queue.enqueue(start);
  parentDict[start] = null;

  while (!queue.isEmpty()) {
    let activePosition = queue.dequeue();
    const [x, y] = activePosition;

    //If end position is found, reconstruct path
    if (x === end[0] && y === end[1]) {
      path = reconstructPath(parentDict, end);
      break;
    }

    //If node hasn't been visited yet:
    if (!visitedPositions.has(activePosition.toString())) {
      visitedPositions.add(activePosition.toString());

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
        const [nx, ny] = [x + dx, y + dy];
        const possibleMove = [nx, ny];

        if (isValidMove(nx, ny)) {
          queue.enqueue(possibleMove);

          //Remember parent of the possible move
          if (!(possibleMove in parentDict)) {
            parentDict[possibleMove] = activePosition;
          }
        }
      }
    }
  }

  return path;
}
