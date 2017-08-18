const Restaurants = require('../../../models/Restaurants')

function byCuisine (not, req, res) {
  const { limit, projection, offset } = req
  const { cuisine } = req.params
  let query = { cuisine }
  if (not) {
    query = { cuisine: {$ne: cuisine} }
  }

  Restaurants.find(query, projection)
    .limit(limit)
    .skip(offset)
    .then(aRestaurants => {
      // if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byCuisine
