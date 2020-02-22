require('./index')

/* eslint-disable no-undef */

test('starts', () => {
  expect(start()).toBe(true)
})

test('clear', () => {
  expect(clear(0, 0)).toBe(true)
})

/* eslint-enable no-undef */
