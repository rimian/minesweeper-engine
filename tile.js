
class Tile {
  constructor (explosive) {
    this.explosive = !!explosive
    this.state = 'hidden'
    this.values = { exploded: 'X', cleared: '0', hidden: '-' }
  }

  press() {
    this.state = this.explosive ? 'exploded' : 'cleared'
  }

  value() {
    return this.values[this.state]
  }
}

module.exports = Tile
