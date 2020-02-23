const Tile = require('./tile')

let tile

describe('Tile', () => {
  beforeEach(() => {
    tile = new Tile()
  })

  test('it is hidden', () => {
    expect(tile.state).toEqual('hidden')
  })

  test('it is not armed', () => {
    tile = new Tile()
    expect(tile.armed).toEqual(false)
  })

  test('it is armed', () => {
    tile = new Tile(true)
    expect(tile.armed).toEqual(true)
  })

  test('it is cleared', () => {
    tile = new Tile()
    tile.press();
    expect(tile.cleared()).toEqual(true)
  })

  test('it detonated', () => {
    tile = new Tile(true)
    tile.press();
    expect(tile.state).toEqual('detonated')
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
