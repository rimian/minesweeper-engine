const Game = require('../src/game')
const Tile = require('../src/tile')
let game
let tile

describe('Game', () => {
  beforeEach(() => {
    game = new Game()
  })

  test('has no status before it is started', () => {
    expect(game.status).toBeUndefined()
  })

  test('has settings', () => {
    expect(game.settings.rows).toEqual(10)
    expect(game.settings.cols).toEqual(10)
    expect(game.settings.mines).toEqual(10)

    game = new Game({ rows: 2, cols: 3, mines: 1 })
    expect(game.settings.rows).toEqual(2)
    expect(game.settings.cols).toEqual(3)
    expect(game.settings.mines).toEqual(1)
  })

  test('it has an empty tile list', () => {
    expect(game.tiles).toEqual([])
  })

  test('has random ids', () => {
    expect(game.random()).toHaveLength(10)
  })

  test('it is running after it starts', () => {
    game.start()
    expect(game.state).toEqual('running')
  })

  test('it loads tiles', () => {
    game.start()
    expect(game.tiles).toHaveLength(100)
    expect(game.tiles[0]).toBeInstanceOf(Tile)
  })

  test('it clears old tiles', () => {
    game.start()
    game.start()
    expect(game.tiles).toHaveLength(100)
  })

  test('it has a board', () => {
    game.start()
    const board = game.board();
    expect(board).toHaveLength(10)
    expect(board[0]).toHaveLength(10)
  })

  test('it gets a tile by x and y coordinates', () => {
    game.start()
    // map integers so they can be tested
    game.tiles = game.tiles.map((t, i) => i);
    expect(game.tile(0, 0)).toEqual(0)
    expect(game.tile(1, 0)).toEqual(1)
    expect(game.tile(1, 2)).toEqual(21)
    expect(game.tile(3, 2)).toEqual(23)
    expect(game.tile(9, 9)).toEqual(99)
  })

  test('it does not get a tile out of bounds', () => {
    game.start()
    expect(game.tile(0, -1)).toBeUndefined()
    expect(game.tile(-1, -1)).toBeUndefined()
    expect(game.tile(-1, 0)).toBeUndefined()
  })

  test('ends the game', () => {
    game.random = () => [0]
    game.start()
    game.clear(0, 0)
    expect(game.state).toEqual('game-over')
  })

  describe('starting the game', () => {
    test('it arms and adds danger', () => {
      game = new Game({ rows: 2, cols: 4, mines: 1 })
      game.random = () => [0]
      game.start()
      expect(game.tiles[0].armed).toEqual(true)
      expect(game.tiles[1].danger).toEqual(1)
      expect(game.tiles[2].danger).toEqual(0)
      expect(game.tiles[3].danger).toEqual(0)

      expect(game.tiles[4].danger).toEqual(1)
      expect(game.tiles[5].danger).toEqual(1)
      expect(game.tiles[6].danger).toEqual(0)
      expect(game.tiles[7].danger).toEqual(0)
    });
  });

  describe('playing the game', () => {
    beforeEach(() => {
      // hide armed tiles
      game.random = () => []
      game.start()

      tile = new Tile;
      tile.flag = jest.fn()
      tile.clear = jest.fn()
      game.tile = () => tile
    })

    test('will not expose tile when the game is over', () => {
      game.state = 'game-over'
      game.clear(0, 0)
      expect(tile.clear).toHaveBeenCalledTimes(0)
    });

    test('will not flag tile when the game is over', () => {
      game.state = 'game-over'
      game.flag(0, 0)
      expect(tile.flag).toHaveBeenCalledTimes(0)
    });

    test('flags the tile', () => {
      game.flag(1, 1)
      expect(tile.flag).toHaveBeenCalled()
    })
  })
})
