const Tile = require('./tile')

let tile

describe('Tile', () => {
  beforeEach(() => {
    tile = new Tile()
  })

  test('it is hidden', () => {
    expect(tile.hidden).toEqual(true)
  })

  test('it is not explosive', () => {
    tile = new Tile()
    expect(tile.explosive).toEqual(false)
  })

  test('it is explosive', () => {
    tile = new Tile(true)
    expect(tile.explosive).toEqual(true)
  })

  describe('', () => {})
})
