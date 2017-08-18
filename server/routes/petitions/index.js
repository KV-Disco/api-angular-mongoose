const express = require('express')
const router = express.Router()

const parseQueries = require('./middlewares/parseQueries')

const allRestaurants = require('./handlers/allRestaurants')
const byBorough = require('./handlers/byBorough')
const byCuisine = require('./handlers/byCuisine')
const byId = require('./handlers/byId')
// const byDistance = require('./handlers/byDistance')

router.use(parseQueries)
router.get('/restaurants', allRestaurants) // (req, res)
router.get('/restaurants/borough/:borough', byBorough) // (req,res)
router.get('/restaurants/cuisine/:cuisine', byCuisine.bind(null, false))
router.get('/restaurants/cuisine/not/:cuisine', byCuisine.bind(null, true))
router.get('/restaurant/:id', byId)
// router.get('/restaurant/:id/around/:km', byDistance)

module.exports = router
