const Logger = require('../src/logger')

let logger;
const game = new class {}

describe('Logger', () => {
  beforeEach(() => {
    logger = new Logger(game)
  })

  test('mapping values', () => {
    expect(logger.settings).toEqual({
      hidden: ' ',
      cleared: '0',
      detonated: 'X',
      flagged: '|',
    })
  })

  test('default value', () => {
    const tile = { state: 'hidden' }
    expect(logger.value(tile)).toEqual(' ')
  })

  test('cleared value', () => {
    const tile = { state: 'cleared' }
    expect(logger.value(tile)).toEqual('0')
  })

  test('get all the values and leaves the original', () => {
    game.board = () => [[{ state: 'cleared' }], [{ state: 'flagged' }]]
    const values = logger.values()
    expect(values.join('')).toEqual('0|')
    expect(game.board()).toEqual([[{ state: 'cleared' }], [{ state: 'flagged' }]])
  })
});
