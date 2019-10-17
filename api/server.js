const express = require('express')
const app = express()
const db = require('./queries')

app.get('/tree', db.getUsers)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})