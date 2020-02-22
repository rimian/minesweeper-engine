const arrayChunk = require('array-chunk')

class Game {
  constructor () {
    this.rows = 10
    this.cols = 10
    this.board = []
    this.tiles = []
  }

  start () {
    this.tiles = Array(this.rows * this.cols).fill(0)
    this.board = arrayChunk(this.tiles, this.cols)
    return this.status = 'running'
  }

  clear (/* x, y */) {
    return true
  }
}

module.exports = Game
