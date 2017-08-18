const Restaurants = require('../../../models/Restaurants')

function byDistance (req, res) {
  const { limit, projection, offset } = req
  const { id, km } = req.params
  let query = { restaurant_id: id }
  let latitude
  let longitude

  Restaurants.find(query)
    .then(aRestaurants => {
      // if (err) throw err
      latitude = aRestaurants[0].address.coord[0]
      longitude = aRestaurants[0].address.coord[0]
      Restaurants.find({
        'address.coord': {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [ longitude, latitude ]
            },
            $maxDistance: km * 1000
          }
        }
      }, projection)
  .limit(limit)
  .skip(offset)
  .then(aRestaurants => {
    // if (err) throw err
    res.json(aRestaurants)
  })
    })
}

module.exports = byDistance
