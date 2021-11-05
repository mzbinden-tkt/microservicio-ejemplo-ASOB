const express = require('express')
require('./connections/db')

const app = express()
const orders = require('./routes')
const port = process.env.NODE_PORT || 3000
app.use(express.json())
app.use('/orders', orders)
app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Order service`)
})
