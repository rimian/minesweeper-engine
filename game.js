const arrayChunk = require('array-chunk')
const Tile = require('./tile')

class Game {
  constructor () {
    this.rows = 10
    this.cols = 10
    this.tiles = []
  }

  board() {
    return arrayChunk(this.tiles.map(t => t.value()), this.cols)
  }

  start () {
    this.tiles = Array(this.rows * this.cols).fill(new Tile)
    return this.status = 'running'
  }

  clear (/* x, y */) {
    return true
  }
}

module.exports = Game
