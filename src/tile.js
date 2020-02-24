
class Tile {
  constructor () {
    this.state = 'hidden'
    this.hidden = true
    this.values = { detonated: 'X', cleared: '0' }
  }

  arm() {
    this.state = 'armed'
  }

  press() {
    this.hidden = false;
    this.state = this.armed() ? 'detonated' : 'cleared'
  }

  armed() {
    return this.state == 'armed'
  }

  detonated() {
    return this.state == 'detonated'
  }

  cleared() {
    return this.state == 'cleared'
  }

  value() {
    return this.hidden ? '-' : this.values[this.state]
  }
}

module.exports = Tile
