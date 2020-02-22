const Game = require('./game')
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

  test('it has an empty board', () => {
    expect(game.board).toEqual([])
  })

  test('it has an empty tile list', () => {
    expect(game.tiles).toEqual([])
  })

  test('it is running after it starts', () => {
    game.start()
    expect(game.status).toEqual('running')
  })

  test('it has a grid', () => {
    game.start()
    expect(game.board).toHaveLength(10)
    expect(game.board[0]).toHaveLength(10)
  })

  test('clears', () => {
    game.start()
    expect(game.clear(1, 1)).toBeTruthy()
  })
})
