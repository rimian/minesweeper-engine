const Game = require('./game')

const game = new Game()

/* eslint-disable no-undef */

_print = () => {
  console.table(game.board())
  return game.state;
}

start = () => {
  game.start()
  return _print()
}

expose = (x, y) => {
  game.expose(x, y)
  return _print()
}

s = () => { return start() }
e = (x, y) => { return expose(x, y) }

/* eslint-enable no-undef */
