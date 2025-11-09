import { knightMoves } from './knight-moves';

const path = knightMoves([3, 3], [0, 7]);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

path.forEach((move) => {
  console.log(move);
});
