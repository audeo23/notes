const Pool = require('pg').Pool

const pool = new Pool({
  user: 'taciiwhwennkcy',
  host: 'ec2-54-217-206-65.eu-west-1.compute.amazonaws.com',
  database: 'deb62u7bbkd6qm',
  password: '8b9ef5e9e4f17f08c675ee7b1e5ceb4534340615a2a828ad726716db7957436e',
  port: 5432,
  ssl: true
})


getTree = (request, response) => {
  pool.query('select f.folder_name, f.id as folder_id, p.project_name, p.id as project_id from notes.projects p left join notes.folders f on p.folder_id = f.id order by f.id, p.id', (error, results) => {
    if (error) {
      throw error
    }
    var tree = [];
    var folder_ids = []
    var resp = results.rows.forEach(function (item) {
      // If fodler_id does not existe in [folder_ids]
      if (folder_ids.indexOf(item['folder_id']) == -1) {
        folder_ids.push(item['folder_id']);
        tree.push({ folder_name: item['folder_name'], folder_id: item['folder_id'], projects: [{ project_name: item['project_name'], project_id: item['project_id'] }] })
      }
      // Else fodler_id already is in [folder_ids] 
      else {
        tree[tree.length - 1]['projects'].push({ project_name: item['project_name'], project_id: item['project_id'] })
        // console.log(tree[tree.length -1]['projects'])
      }
    })
    response.status(200).json(tree)
  })
}

updateFolderName = (request, response) => {
  const text = "update notes.folders set folder_name = $1 where id = $2"
  const values = ['TEST', 1]
  pool.query(text, values, (err, res) => {
    if (err) { console.log(err.stack) }
    else {
      response.status(200).json(response.rows)
    }
  })

}


module.exports = {
  getTree,
  updateFolderName
}