const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  customerID: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
  },
  bookID: {
    type: mongoose.SchemaTypes.ObjectId,
    require: true,
  },
  title: {
    type: mongoose.SchemaTypes.String,
    require: true,
  },
  description: {
    type: mongoose.SchemaTypes.String,
    require: true,
  },
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order
