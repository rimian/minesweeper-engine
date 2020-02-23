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
    return this.tiles[x * this.rows + y]
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

  clear (x, y) {
    return this.tile(x, y).press()
  }
}

module.exports = Game
