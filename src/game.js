const arrayChunk = require('array-chunk')
const shuffle = require('shuffle-array')
const moore = require('moore')
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
    return tiles[y] ? tiles[y][x] : undefined
  }

  board() {
    return this.chunk(this.tiles)
  }

  start () {
    this.tiles = []

    for(let i = this.area; i--;){
      this.tiles.push(new Tile)
    }

    this.random().forEach((i) => {
      this.tiles[i].arm()
    })

    return this.state = 'running'
  }

  flag(x, y) {
    if(this.state == 'game-over') {
      return this.state
    }

    this.tile(x, y).flag()

    return true
  }

  clear(x, y) {
    const tile = this.tile(x, y)

    if(!tile || this.state == 'game-over') {
      return this.state
    }

    tile.clear()

    if(this.tile(x, y).detonated()) {
      return this.state = 'game-over'
    }

    moore(1, 2).forEach((c) => {
      const x1 = c[0] + x
      const y1 = c[1] + y

      const new_tile = this.tile(x1, y1)

      if(new_tile && new_tile.state == 'default' && !new_tile.armed) {
        return clear(x1, y1)
      }
    })

    return true;
  }
}

module.exports = Game
