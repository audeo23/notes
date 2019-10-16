const express = require('express')
const app = express()

const { Client } = require('pg')

const client = new Client({
  user: 'taciiwhwennkcy',
  host: 'ec2-54-217-206-65.eu-west-1.compute.amazonaws.com',
  database: 'deb62u7bbkd6qm',
  password: '8b9ef5e9e4f17f08c675ee7b1e5ceb4534340615a2a828ad726716db7957436e',
  port: 5432,
  host: "localhost",
  ssl: true
})

app.get('/', function (req, res) {

  console.log('Requested route /')

  client.query('SELECT NOW() as now', (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
  
  res.send()
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})