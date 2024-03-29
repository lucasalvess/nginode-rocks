const mysql = require('mysql')
const config = {
    host: 'db',
    user:'root',
    password: 'root',
    database: 'nodedb'
}

module.exports = {
    insertPeople: function (name) {
        const connection = mysql.createConnection(config)

        const sql = "INSERT INTO people(name) VALUES('" + name + "')"
        connection.query(sql)
        connection.end()
    },
    findPeople: function (callback) {
        const connection = mysql.createConnection(config)
        
        connection.query("SELECT name FROM people", (err, rows) => {
            if (err) throw err;
            callback(rows)
        })
        connection.end()
    }
}