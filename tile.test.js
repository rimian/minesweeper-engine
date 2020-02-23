const Tile = require('./tile')

let tile

describe('Tile', () => {
  beforeEach(() => {
    tile = new Tile()
  })

  test('it is hidden', () => {
    expect(tile.hidden).toEqual(true)
  })

  test('it is not armed', () => {
    expect(tile.armed()).toEqual(false)
  })

  test('it is armed', () => {
    tile.arm()
    expect(tile.armed()).toEqual(true)
  })

  test('it is cleared', () => {
    tile.press();
    expect(tile.hidden).toEqual(false)
    expect(tile.cleared()).toEqual(true)
  })

  test('it detonated', () => {
    tile.arm()
    tile.press();
    expect(tile.hidden).toEqual(false)
    expect(tile.detonated()).toEqual(true)
  })

  test('hidden tile with mine has a value', () => {
    tile.arm()
    expect(tile.value()).toEqual('-')
  })

  test('hidden tile without mine has a value', () => {
    expect(tile.value()).toEqual('-')
  })

  test('exploded tile has a value', () => {
    tile.arm()
    tile.press();
    expect(tile.hidden).toEqual(false)
    expect(tile.value()).toEqual('X')
  })

  test('cleared tile has a value', () => {
    tile.press();
    expect(tile.hidden).toEqual(false)
    expect(tile.value()).toEqual('0')
  })
})
