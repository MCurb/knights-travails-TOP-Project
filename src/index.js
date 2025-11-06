import { Queue } from './queue.js';

function knightMoves(start, end) {
  //enqueue the start position
  let path;
  const queue = new Queue();
  queue.enqueue(start);
  //visited = set()
  const visitedPositions = new Set();
  //Track the parent of each neighbor
  const parentDict = {};

  parentDict[start] = null;
  //Start node property is not being added like an array, just like 3,3///

  //while the queue is not empty
  while (!queue.isEmpty()) {
    //dequeued = dequeue
    let currentNode = queue.dequeue();

    //if dequeued is === end break
    if (currentNode[0] === end[0] && currentNode[1] === end[1]) {
      path = reconstructPath(parentDict, end);
      break;
    }

    //if it isn't visited then:
    if (!hasArray(visitedPositions, currentNode)) {
      //add to visited
      visitedPositions.add(currentNode);

      //and then enqueue all its getNeighbors(dequeued)
      getPossibleMoves(currentNode).forEach((neighbor) => {
        if (!(neighbor in parentDict)) {
          parentDict[neighbor] = currentNode;
        }
        queue.enqueue(neighbor);

        //Here the previous parentDict are being overwritten, so the start node doesn't point to null anymore.
      });
    }
  }

  return path;
}

//I'm thinking of using an edge list to track the path of all the parents
//from end to start
//The goal is to modify the BFS algorithm to store the parent of a vertex
//while doing the breath-first search
//The problem is that if I push to the path, every visited vertex, I will
//push more than just the parent vertex

function getPossibleMoves(position) {
  const possibleMoves = [];
  // const operators = {
  //   '+': (a, b) => a + b,
  //   '-': (a, b) => a - b,
  // };

  // for (let i = 0; i < 9; i++) {
  //   let cordinates = [];
  //   let op = '+';
  //   let numberX = 1;
  //   let numberY = 2;
  //   cordinates.push(operators[op](position[0], numberX));
  //   cordinates.push(operators[op](position[1], numberY));

  //   if (
  //     !cordinates[0] < 0 ||
  //     !cordinates[1] < 0 ||
  //     !cordinates[0] > 7 ||
  //     !cordinates[1] > 7
  //   ) {
  //     possibleMoves.push(cordinates);
  //   }
  // }

  possibleMoves.push([position[0] + 1, position[1] + 2]);
  possibleMoves.push([position[0] + 1, position[1] - 2]);
  possibleMoves.push([position[0] + 2, position[1] + 1]);
  possibleMoves.push([position[0] + 2, position[1] - 1]);
  possibleMoves.push([position[0] - 1, position[1] - 2]);
  possibleMoves.push([position[0] - 1, position[1] + 2]);
  possibleMoves.push([position[0] - 2, position[1] - 1]);
  possibleMoves.push([position[0] - 2, position[1] + 1]);

  // I need to avoid pushing off board positions ////
  // Or maybe removing them once pushed
  // I need to traverse the array of arrays, and do it from the last array position
  // if an array position has a cordinate smaller than 0 or larger than 7, remove the array of the possibleMoves arr.
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

function reconstructPath(parentDict, end) {
  const path = [];
  let node = end;
  while (node) {
    //node will never be null because start node in parentDict was overwritten

    //Add node to the beginning of the path
    path.unshift(node);
    //Find parent of the node
    node = parentDict[node];
  }

  return path;
}

//Go through each set item and see if there's one equal to the target
function hasArray(set, target) {
  return [...set].some((arr) =>
    arr.every((value, index) => value === target[index]),
  );
}

const path = knightMoves([3, 3], [7, 7]);
console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach((move) => {
  console.log(move);
});
