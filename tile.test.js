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

  test('it clear', () => {
    tile = new Tile()
    tile.press();
    expect(tile.state).toEqual('cleared')
  })

  test('it exploded', () => {
    tile = new Tile(true)
    tile.press();
    expect(tile.state).toEqual('exploded')
  })
})
