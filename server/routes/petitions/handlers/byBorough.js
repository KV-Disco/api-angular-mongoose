const Restaurants = require('../../../models/Restaurants')

function byBorough (req, res) {
  const { limit, projection, offset } = req
  const { borough } = req.params

  Restaurants.find({ borough }, projection)
    .limit(limit)
    .skip(offset)
    .then(aRestaurants => {
      // if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byBorough
