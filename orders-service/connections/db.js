const mongoose = require('mongoose')
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_PORT, MONGO_DB } = process.env
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

console.log(url)
module.exports = mongoose
  .connect(url)
  .then(() => {
    console.log('Connection successful!')
  })
  .catch((e) => {
    console.log(e)
    console.log('Connection failed!')
  })
