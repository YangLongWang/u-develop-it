const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'yangbao94Wly',
        database: 'election'
    }
);

module.exports = db;