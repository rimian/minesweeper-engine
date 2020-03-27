const arrayChunk = require('array-chunk')
const shuffle = require('shuffle-array')
const moore = require('moore')
const Tile = require('./tile')

class Game {
  constructor (options = {}) {
    this.settings = {
      rows: options.rows || 10,
      cols: options.cols || 10,
      mines: options.mines || 10
    }
    this.area = this.settings.rows * this.settings.cols
    this.tiles = []
  }

  start () {
    this.tiles = []
    this.createTiles()
    this.armTiles()

    this.tiles.forEach((tile) => {
      moore(1, 2).forEach((xy) => {

        const neighbor = this.tile(xy[0] + tile.x, xy[1] + tile.y)

        if(neighbor == undefined) {
          return
        }

        if(neighbor.armed) {
          tile.moreDanger()
        }
      });
    });

    return this.state = 'running'
  }

  createTiles() {
    let i = 0
    for(let y = 0; y < this.settings.rows; y++) {
      for(let x = 0; x < this.settings.cols; x++) {
        this.tiles.push(new Tile(i, { x: x, y: y }))
        i++
      }
    }
  }

  armTiles() {
    this.random().forEach((i) => {
      this.tiles[i].arm()
    })
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

    if(tile.danger > 0) {
      return
    }

    moore(1, 2).forEach((c) => {
      const x1 = c[0] + x
      const y1 = c[1] + y

      const new_tile = this.tile(x1, y1)

      if(new_tile && new_tile.state == 'default' && !new_tile.armed) {
        return this.clear(x1, y1)
      }
    })

    return true;
  }
}

module.exports = Game
