const moore = require('moore')

module.exports = function neighborhood(x, y, tiles) {
  const outOfBounds = (x, y) => {
    const height = tiles.length
    return (x < 0 || y < 0 || y + 1 > height) ? true : false
  }

  const neighbors = moore(1, 2).map((xy) => {
    const x1 = xy[0] + x
    const y1 = xy[1] + y

    if(outOfBounds(x1, y1)) {
      return
    }

    return tiles[y1][x1]
  })

  return neighbors.filter(t => t)
}
