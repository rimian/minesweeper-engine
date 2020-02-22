
class Tile {
  constructor (explosive) {
    this.explosive = !!explosive
    this.state = 'hidden'
  }

  press() {
    this.state = this.explosive ? 'exploded' : 'cleared'
  }
}

module.exports = Tile
