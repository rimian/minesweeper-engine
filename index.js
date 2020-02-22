const Game = require('./game')

const game = new Game()
let print = false;

/* eslint-disable no-undef */

start = (p) => {
  print = !!p
  game.start()
  if (print) { p() }
  return true
}

clear = (x, y) => {
  game.clear(x, y)
  if (print) { p() }
  return true;
}

p = () => console.table(game.board())

/* eslint-enable no-undef */
