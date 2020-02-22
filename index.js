const Game = require('./game')

const game = new Game()

/* eslint-disable no-undef */

start = (print = false) => {
  game.start()
  if (print) { p() }
  return true
}

clear = (x, y) => {
  return game.clear(x, y)
}

p = () => console.table(game.board)

var StateMachine = require('javascript-state-machine');

var Nut = StateMachine;

/* eslint-enable no-undef */
