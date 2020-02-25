const Logger = require('../src/logger')

let logger;
const game = new class {}

describe('Logger', () => {
  beforeEach(() => {
    logger = new Logger(game)
  })

  test('mapping values', () => {
    expect(logger.settings).toEqual({
      default: '.',
      cleared: '0',
      detonated: 'X',
      flagged: '|',
    })
  })

  test('value', () => {
    logger.settings = { foo: 'bar' }
    expect(logger.value({ state: 'foo' })).toEqual('bar')
  })

  test('get all the values and leaves the original', () => {
    game.board = () => [[{ state: 'cleared' }], [{ state: 'flagged' }]]
    const values = logger.values()
    expect(values.join('')).toEqual('0|')
    expect(game.board()).toEqual([[{ state: 'cleared' }], [{ state: 'flagged' }]])
  })
});
