const Game = require('./game')
const Tile = require('./tile')
let game

describe('Game', () => {
  beforeEach(() => {
    game = new Game()
  })

  test('has no status before it is started', () => {
    expect(game.status).toBeUndefined()
  })

  test('has rows', () => {
    expect(game.rows).toEqual(10)
  })

  test('has columns', () => {
    expect(game.cols).toEqual(10)
  })

  test('it has an empty tile list', () => {
    expect(game.tiles).toEqual([])
  })

  test('it is running after it starts', () => {
    game.start()
    expect(game.status).toEqual('running')
  })

  test('it tiles', () => {
    game.start()
    expect(game.tiles).toHaveLength(100)
    expect(game.tiles[0]).toBeInstanceOf(Tile)
  })

  test('it has a board', () => {
    game.start()
    const board = game.board();
    expect(board).toHaveLength(10)
    expect(board[0]).toHaveLength(10)
    expect(board[0][0]).toEqual('-')
  })

  test('it has a tile', () => {
    game.start()
    const tiles = game.tiles;
    expect(game.tile(0, 0)).toEqual(tiles[0])
    expect(game.tile(0, 3)).toEqual(tiles[3])
    expect(game.tile(1, 0)).toEqual(tiles[10])
    expect(game.tile(1, 2)).toEqual(tiles[12])
    expect(game.tile(3, 2)).toEqual(tiles[32])
    expect(game.tile(9, 9)).toEqual(tiles[99])
  })

  test('exposes', () => {
    game.start()
    game.expose(0, 0)
    expect(game.tiles[0].cleared()).toEqual(true)
  })

  describe('clear closest', () => {
    beforeEach(() => game.start());

    test('clears the nearby tiles', () => {
      game.start()
      game.expose(0, 0)
      expect(game.tiles[1].cleared()).toEqual(true)
      expect(game.tiles[10].cleared()).toEqual(true)
      expect(game.tiles[11].cleared()).toEqual(true)
    })
  })
})
