const index = require('./index');

test('starts', () => {
  expect(start()).toBe(true);
});

test('clear', () => {
  expect(clear(0, 0)).toBe(true);
});
