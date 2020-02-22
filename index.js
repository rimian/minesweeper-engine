const Game = require('./game');

const game = new Game;

start = () => {
  game.start();
  console.table(game.board);
  return true;
}
