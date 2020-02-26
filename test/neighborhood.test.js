const neighborhood = require('../src/neighborhood')

const tiles = [
  [ 0, 1, 2, 3, 4, 5],
  [10,11,12,13,14,15],
  [20,21,22,23,24,25],
  [30,31,32,33,34,35]
]

describe('neighborhood', () => {
  test('neighbors of a middle tile', () => {
    expect(neighborhood(4, 1, tiles)).toEqual(
      [
         3,  4,  5,
        13,     15,
        23, 24, 25
      ]
    )
  })

  test('neighbors of the top left', () => {
    expect(neighborhood(0, 0, tiles)).toEqual(
      [
             1,
        10, 11
      ]
    )
  })

  test('neighbors of the top middle', () => {
    expect(neighborhood(2, 0, tiles)).toEqual(
      [
         1,      3,
        11, 12, 13
      ]
    )
  })

  test('neighbors of the bottom left', () => {
    expect(neighborhood(0, 3, tiles)).toEqual(
      [
        20, 21,
            31
      ]
    )
  })

  test('neighbors of the bottom middle', () => {
    expect(neighborhood(2, 3, tiles)).toEqual(
      [
        21, 22, 23,
        31,     33
      ]
    )
  })

  test('neighbors of the bottom right', () => {
    expect(neighborhood(5, 3, tiles)).toEqual(
      [
        24, 25,
        34
      ]
    )
  })
})
