
class Tile {
  constructor () {
    this.state = 'hidden'
    this.hidden = true
  }

  arm() {
    this.state = 'armed'
  }

  flag() {
    this.state = 'flagged'
  }

  flagged() {
    return this.state == 'flagged'
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
}

module.exports = Tile
