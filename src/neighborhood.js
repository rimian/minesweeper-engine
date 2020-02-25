const moore = require('moore')

module.exports = function neighborhood(tiles, x, y) {
  return moore().map((xy) => tiles[xy[1] + y][xy[0] + x])
}
