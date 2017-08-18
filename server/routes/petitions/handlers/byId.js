const Restaurants = require('../../../models/Restaurants')
// const {ObjectId} = require('mongodb')

function byId (req, res) {
  const { projection } = req
  const { id } = req.params

  Restaurants.findById({id}, projection)
    .then(aRestaurants => {
      // if (err) throw err
      res.json(aRestaurants)
    })
}

module.exports = byId
