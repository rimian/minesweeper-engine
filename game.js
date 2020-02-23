const arrayChunk = require('array-chunk')
const Tile = require('./tile')

class Game {
  constructor () {
    this.rows = 10
    this.cols = 10
    this.area = this.rows * this.cols
    this.tiles = []
  }

  tile(x, y) {
    return this.tiles[y * this.rows + x]
  }

  board() {
    return arrayChunk(this.tiles.map(t => t.value()), this.cols)
  }

  start () {
    for(let i = this.area; i--;){
      this.tiles.push(new Tile)
    }

    return this.status = 'running'
  }

  expose (x, y) {
    this.tile(x, y).press()
    this.tile(x, y + 1).press()
    this.tile(x + 1, y).press()
    this.tile(x + 1, y + 1).press()
  }
}

module.exports = Game
