const Game = require('./game')

const game = new Game()

/* eslint-disable no-undef */

_print = () => {
  console.table(game.board())
}

start = () => {
  game.start()
  _print()
  return true
}

expose = (x, y) => {
  game.expose(x, y)
  _print()
  return true;
}

s = () => { return start() }
e = (x, y) => { return expose(x, y) }

/* eslint-enable no-undef */
