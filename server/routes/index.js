const express = require('express')
const router = express.Router()
const user = require('./user')
const todo = require('./todo')
const { authenticate } = require('../middleware/auth')
const errHandler = require('../middleware/errorHandler')
const Api = require('../controller/apiController')

router.use('/users', user)
router.get('/quotes', Api.getQuotes)
router.use(authenticate)
router.use('/todos', todo)
router.use(errHandler)

module.exports = router