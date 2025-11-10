import { knightMoves } from './knight-moves';

const path = knightMoves([0, 0], [3, 3]);

console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

path.forEach((move) => {
  console.log(move);
});
