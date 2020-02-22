const Game = require('./game');

const game = new Game;

start = (print = false) => {
  game.start();
  if(print) { p() }
  return true;
};

clear = (x, y) => {
  return game.clear(x, y);
};

p = () => console.table(game.board);
