const router = require('express').Router()
const controllers = require('../controllers')
const auth = require('../utils/auth')

router.get('/create', auth(), controllers.trip.get.create)
router.post('/create', auth(), controllers.trip.post.create)

router.get('/details/:id', auth(), controllers.trip.get.details)

router.get('/join/:id', auth(), controllers.trip.get.join)

router.get('/delete/:id', auth(), controllers.trip.get.delete)


module.exports = router