const arrayChunk = require('array-chunk')
const Tile = require('./tile')

class Game {
  constructor () {
    this.rows = 10
    this.cols = 10
    this.area = this.rows * this.cols
    this.tiles = []
  }

  chunk(arr) {
    return arrayChunk(arr, this.cols)
  }

  tile(x, y) {
    const tiles = this.chunk(this.tiles)
    return tiles[y][x]
  }

  board() {
    return this.chunk(this.tiles.map(t => t.value()))
  }

  start () {
    for(let i = this.area; i--;){
      this.tiles.push(new Tile)
    }

    return this.state = 'running'
  }

  expose(x, y) {
    this.tile(x, y).press()
    this.tile(x, y + 1).press()
    this.tile(x + 1, y).press()
    this.tile(x + 1, y + 1).press()

    return true;
  }
}

module.exports = Game
