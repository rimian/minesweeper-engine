
class Tile {
  constructor (armed) {
    this.armed = !!armed
    this.state = 'hidden'
    this.values = { detonated: 'X', cleared: '0', hidden: '-' }
  }

  cleared() {
    return this.state == 'cleared'
  }

  press() {
    this.state = this.armed ? 'detonated' : 'cleared'
  }

  value() {
    return this.values[this.state]
  }
}

module.exports = Tile
