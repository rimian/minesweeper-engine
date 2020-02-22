
class Tile {
  constructor (explosive) {
    this.explosive = !!explosive
    this.state = 'hidden'
  }
}

module.exports = Tile
