const Game = require('../src/game')

describe('Game', () => {
  test('has no status before it is started', () => {
    expect(new Game).toBeTruthy()
  })
})
