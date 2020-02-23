const arrayChunk = require('array-chunk')
const shuffle = require('shuffle-array')
const Tile = require('./tile')

class Game {
  constructor () {
    this.settings = {
      rows: 10,
      cols: 10,
      mines: 10
    }
    this.area = this.settings.rows * this.settings.cols
    this.tiles = []
  }

  chunk(arr) {
    return arrayChunk(arr, this.settings.cols)
  }

  random() {
    const ids = Array(this.area).fill().map((_x, i) => i)
    return shuffle(ids).slice(0, this.settings.mines)
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

    this.random().forEach((i) => {
      this.tiles[i].arm()
    })

    return this.state = 'running'
  }

  expose(x, y) {
    if(this.state == 'game-over') {
      return this.state
    }

    this.tile(x, y).press()

    if(this.tile(x, y).detonated()) {
      return this.state = 'game-over'
    }

    this.tile(x, y + 1).press()
    this.tile(x + 1, y).press()
    this.tile(x + 1, y + 1).press()

    return true;
  }
}

module.exports = Game
