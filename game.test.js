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

  test('clears', () => {
    game.start()
    expect(game.clear(1, 1)).toBeTruthy()
  })
})
