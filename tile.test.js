const Tile = require('./tile')

let tile

describe('Tile', () => {
  beforeEach(() => {
    tile = new Tile()
  })

  test('it is hidden', () => {
    expect(tile.state).toEqual('hidden')
  })

  test('it is not explosive', () => {
    tile = new Tile()
    expect(tile.explosive).toEqual(false)
  })

  test('it is explosive', () => {
    tile = new Tile(true)
    expect(tile.explosive).toEqual(true)
  })

  test('it clears', () => {
    tile = new Tile()
    tile.press();
    expect(tile.state).toEqual('cleared')
  })

  test('it exploded', () => {
    tile = new Tile(true)
    tile.press();
    expect(tile.state).toEqual('exploded')
  })

  test('hidden tile with mine has a value', () => {
    tile = new Tile(true)
    expect(tile.value()).toEqual('-')
  })

  test('hidden tile without mine has a value', () => {
    tile = new Tile()
    expect(tile.value()).toEqual('-')
  })

  test('exploded tile has a value', () => {
    tile = new Tile(true)
    tile.press();
    expect(tile.value()).toEqual('X')
  })

  test('cleared tile has a value', () => {
    tile = new Tile()
    tile.press();
    expect(tile.value()).toEqual('0')
  })
})
