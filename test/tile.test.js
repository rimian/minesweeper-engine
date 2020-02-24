const Tile = require('../src/tile')

let tile

describe('Tile', () => {
  beforeEach(() => {
    tile = new Tile()
  })

  test('default state', () => {
    expect(tile.hidden).toEqual(true)
    expect(tile.armed).toEqual(false)
    expect(tile.flagged()).toEqual(false)
  })

  test('it is armed', () => {
    tile.arm()
    expect(tile.armed).toEqual(true)
  })

  test('it is flagged', () => {
    tile.flag()
    expect(tile.flagged()).toEqual(true)
    expect(tile.hidden).toEqual(true)
  })

  test('it is cleared', () => {
    tile.clear();
    expect(tile.hidden).toEqual(false)
    expect(tile.cleared()).toEqual(true)
  })

  test('it is detonated', () => {
    tile.arm()
    tile.clear();
    expect(tile.hidden).toEqual(false)
    expect(tile.detonated()).toEqual(true)
  })
})
