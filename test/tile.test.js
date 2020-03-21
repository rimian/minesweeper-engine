const Tile = require('../src/tile')

let tile

describe('Tile', () => {
  describe('FSM', () => {
    beforeEach(() => {
      tile = new Tile(4, { x: 3, y:5 })
    })

    test('default state', () => {
      expect(tile.state).toEqual('default')
      expect(tile.armed).toEqual(false)
      expect(tile.id).toEqual(4)
      expect(tile.x).toEqual(3)
      expect(tile.y).toEqual(5)
    })

    test('default -> cleared', () => {
      tile.clear();
      expect(tile.state).toEqual('cleared')
    })

    test('default -> flagged -> unflagged', () => {
      tile.flag()
      expect(tile.state).toEqual('flagged')
      tile.unflag()
      expect(tile.state).toEqual('default')
    })

    test('default -> armed -> flagged -> unflagged -> cleared -> detonated', () => {
      tile.arm()
      tile.flag()
      tile.unflag()
      expect(tile.state).toEqual('default')
      tile.clear();
      expect(tile.state).toEqual('detonated')
    })

    test('default -> armed -> cleared -> detonated', () => {
      tile.arm()
      tile.clear();
      expect(tile.state).toEqual('detonated')
    })

    test('it is not flagged, cleared or detonated', () => {
      expect(tile.flagged()).toEqual(false)
      expect(tile.cleared()).toEqual(false)
      expect(tile.detonated()).toEqual(false)
    })

    test('it is cleared', () => {
      tile.clear();
      expect(tile.cleared()).toEqual(true)
    })

    test('it is detonated', () => {
      tile.arm()
      tile.clear();
      expect(tile.detonated()).toEqual(true)
    })

    test('it is flagged', () => {
      tile.flag();
      expect(tile.flagged()).toEqual(true)
    })

    test('it has a danger value', () => {
      expect(tile.danger).toEqual(0)
      tile.moreDanger()
      expect(tile.danger).toEqual(1)
    })
  })
})
