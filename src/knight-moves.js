import { reconstructPath, hasArray, getPossibleMoves } from './utils';
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

    //If end position is found, reconstruct path
    if (activePosition[0] === end[0] && activePosition[1] === end[1]) {
      path = reconstructPath(parentDict, end);
      break;
    }

    //If node hasn't been visited yet:
    if (!visitedPositions.has(activePosition.toString())) {
      visitedPositions.add(activePosition.toString());

      getPossibleMoves(activePosition).forEach((validMove) => {
        //Remember the "parent" node
        if (!(validMove in parentDict)) {
          parentDict[validMove] = activePosition;
        }
        //Enqueue all valid moves
        queue.enqueue(validMove);
      });
    }
  }

  return path;
}
