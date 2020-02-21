
const game = {
  rows: 10,
  cols: 10,
  running: false,

  start() {
    return this.running = true;
  }
};

module.exports = game
