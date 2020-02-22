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
    // Map them to index so we can check them
    game.tiles = game.tiles.map((t, i) => i)
    expect(game.tile(0, 0)).toEqual(0)
    expect(game.tile(0, 3)).toEqual(3)
    expect(game.tile(1, 0)).toEqual(10)
    expect(game.tile(1, 2)).toEqual(12)
    expect(game.tile(3, 2)).toEqual(32)
    expect(game.tile(9, 9)).toEqual(99)
  })

  test('clears', () => {
    game.start()
    expect(game.clear(1, 1)).toBeTruthy()
  })
})
