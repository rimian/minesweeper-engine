const arrayChunk = require('array-chunk')

class Game {
  constructor () {
    this.rows = 10
    this.cols = 10
    this.running = false
    this.board = []
    this.tiles = []
  }

  start () {
    this.tiles = Array(this.rows * this.cols).fill(0)
    this.board = arrayChunk(this.tiles, this.cols)
    return this.running = true
  }

  clear (/* x, y */) {
    return true
  }
}

module.exports = Game
