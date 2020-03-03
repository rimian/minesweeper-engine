
class Logger {
  constructor(game) {
    this.game = game

    this.settings = {
      default: '#',
      detonated: 'X',
      cleared: ' ',
      flagged: '|'
    }
  }

  value(tile) {
    if(tile.state == 'cleared' && tile.danger > 0) {
      return tile.danger.toString()
    }
    else {
      return this.settings[tile.state]
    }
  }

  values() {
    return this.game.board().map(row => {
      return row.map(col => this.value(col))
    })
  }

  table() {
    return console.table(this.values())
  }
}

module.exports = Logger
