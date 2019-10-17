const express = require('express')
const app = express()
const db = require('./queries')


// Add headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/tree', db.getUsers)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})