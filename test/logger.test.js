const Logger = require('../src/logger')

let logger;
const game = new class {}

describe('Logger', () => {
  beforeEach(() => {
    logger = new Logger(game)
  })

  test('mapping values', () => {
    expect(logger.settings).toEqual({
      default: '#',
      cleared: ' ',
      detonated: 'X',
      flagged: '|',
    })
  })

  test('value', () => {
    logger.settings = { foo: 'bar' }
    expect(logger.value({ state: 'foo' })).toEqual('bar')
  })

  test('get all the values and leaves the original', () => {
    game.board = () => [[{ state: 'default' }], [{ state: 'flagged' }]]
    const values = logger.values()
    expect(values.join('')).toEqual('#|')
    expect(game.board()).toEqual([[{ state: 'default' }], [{ state: 'flagged' }]])
  })
});
