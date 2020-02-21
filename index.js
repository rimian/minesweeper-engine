
var game = {
  rows: 10,
  cols: 10,

  state: [],

  start() {
    createRow = () => Array(this.cols).fill(0);
    this.state = Array(this.rows).fill(createRow());
    this.render();
    return true;
  },

  render() {
    console.table(this.state);
  }
};

start = () => {
  return game.start();
}

move = (x, y) => {
  game.render();
}

m = (x, y) => { move(x, y) }
