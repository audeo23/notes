const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const db = require('./queries')
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'taciiwhwennkcy',
  host: 'ec2-54-217-206-65.eu-west-1.compute.amazonaws.com',
  database: 'deb62u7bbkd6qm',
  password: '8b9ef5e9e4f17f08c675ee7b1e5ceb4534340615a2a828ad726716db7957436e',
  port: 5432,
  ssl: true
})

// Add body parser
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/tree', db.getTree)

app.post('/folderName/:id', function (request, response, next) {
  console.log(request.body)
  const text = "update notes.folders set folder_name = $1 where id = $2"
  const values = [request.body.name, request.params.id]
  pool.query(text, values, (err, res) => {
    if (err) { console.log(err.stack) }
    else { response.status(200).json(response.rows) }
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})