const Game = require('./game')

const game = new Game()

/* eslint-disable no-undef */

print = () => {
  console.table(game.board())
}

start = () => {
  game.start()
  print()
  return true
}

expose = (x, y) => {
  game.expose(x, y)
  print()
  return true;
}

p = () => { return print() }
s = () => { return start() }
e = (x, y) => { return expose(x, y) }

/* eslint-enable no-undef */
