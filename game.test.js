const game = require('./game');

test('is not running', () => {
  expect(game.running).toEqual(false);
});

test('starts', () => {
  game.start();
  expect(game.running).toEqual(true);
});

test('has rows', () => {
  expect(game.rows).toEqual(10);
});

test('has columns', () => {
  expect(game.cols).toEqual(10);
});
