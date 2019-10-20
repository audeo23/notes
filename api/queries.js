const Pool = require('pg').Pool

const pool = new Pool({
  user: 'taciiwhwennkcy',
  host: 'ec2-54-217-206-65.eu-west-1.compute.amazonaws.com',
  database: 'deb62u7bbkd6qm',
  password: '8b9ef5e9e4f17f08c675ee7b1e5ceb4534340615a2a828ad726716db7957436e',
  port: 5432,
  ssl: true
})


const getTree = (request, response) => {
  pool.query('select f.folder_name, f.id as folder_id, p.project_name, p.id as project_id from notes.projects p left join notes.folders f on p.folder_id = f.id', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getTree
}