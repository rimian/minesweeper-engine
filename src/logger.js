
class Logger {
  constructor(game) {
    this.game = game

    this.settings = {
      hidden: ' ',
      detonated: 'X',
      cleared: '0',
      flagged: '|'
    }
  }

  value(tile) {
    return this.settings[tile.state]
  }

  values() {
    return this.game.board().map(row => {
      console.log(row);
      return row.map(col => this.value(col))
    })
  }

  table() {
    return console.table(this.values())
  }
}

module.exports = Logger
