
class Game {
  constructor() {
    this.rows = 10;
    this.cols = 10;
    this.running = false;
    this.board = [];
  }

  start() {
    const createRow = () => Array(this.cols).fill(0);
    this.board = Array(this.rows).fill(createRow());
    return this.running = true;
  }
}

module.exports = Game
