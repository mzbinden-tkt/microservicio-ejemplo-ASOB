var express = require('express')
var router = express.Router()
const { getOrderById, getOrders, postOrder } = require('../services')

router.get('/', getOrders)
router.get('/:id', getOrderById)
router.post('/', postOrder)

module.exports = router
