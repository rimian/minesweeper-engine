const Tile = require('./tile')

let tile

describe('Tile', () => {
  beforeEach(() => {
    tile = new Tile()
  })

  test('it is hidden', () => {
    expect(tile.hidden).toEqual(true)
    expect(tile.value()).toEqual('-')
  })

  test('it is not armed', () => {
    expect(tile.armed()).toEqual(false)
  })

  test('it is armed', () => {
    tile.arm()
    expect(tile.armed()).toEqual(true)
    expect(tile.value()).toEqual('-')
  })

  test('it is cleared', () => {
    tile.press();
    expect(tile.hidden).toEqual(false)
    expect(tile.cleared()).toEqual(true)
    expect(tile.value()).toEqual('0')
  })

  test('it detonated', () => {
    tile.arm()
    tile.press();
    expect(tile.hidden).toEqual(false)
    expect(tile.detonated()).toEqual(true)
    expect(tile.value()).toEqual('X')
  })
})
