
class Tile {
  constructor () {
    this.state = 'hidden'
    this.hidden = true
    this.armed = false
  }

  arm() {
    this.armed = true
  }

  flag() {
    this.state = 'flagged'
  }

  flagged() {
    return this.state == 'flagged'
  }

  press() {
    this.hidden = false
    this.state = this.armed ? 'detonated' : 'cleared'
  }

  detonated() {
    return this.state == 'detonated'
  }

  cleared() {
    return this.state == 'cleared'
  }
}

module.exports = Tile
