const Tile = require('./tile');

let tile;

describe('Tile', () => {
  beforeEach(() => {
    tile = new Tile;
  });

  test('it is hidden', () => {
    expect(tile.hidden).toEqual(true);
  });
});
