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

  test('value', () => {
    expect(logger.value({ state: 'default', danger: 3 })).toEqual('#')
    expect(logger.value({ state: 'cleared', danger: 3 })).toEqual('3')
  })
});
