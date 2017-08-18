const Restaurants = require('../../../models/Restaurants')

const getAllRestaurants = (req, res) => {
  const { limit, projection, offset } = req
  Restaurants.find({}, projection)
    .limit(limit)
    .skip(offset)
    .then(aRestaurants => {
      // if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = getAllRestaurants
