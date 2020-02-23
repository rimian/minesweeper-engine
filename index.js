const Game = require('./game')

const game = new Game()
let print = false;

/* eslint-disable no-undef */

p = () => print ? console.table(game.board()) : null

start = () => {
  game.start()
  p()
  return true
}

expose = (x, y) => {
  game.expose(x, y)
  p()
  return true;
}

/* eslint-enable no-undef */
