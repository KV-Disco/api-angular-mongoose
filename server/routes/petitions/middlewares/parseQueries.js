// const Restaurants = require('../../../models/Restaurants')

function parseQueries (req, res, next) {
  const { limit = 10, show = '', hide = '', page = 1 } = req.query
  let projection = {}

  if (show) {
    projection = show.split(',').reduce((acc, prop) => {
      acc[prop] = 1
      return acc
    }, projection)
  }

  if (hide) {
    projection = hide.split(',').reduce((acc, prop) => {
      acc[prop] = 0
      return acc
    }, projection)
  }

  req.projection = projection
  req.limit = +limit
  req.offset = (page * limit) - limit
  next()
}

module.exports = parseQueries
