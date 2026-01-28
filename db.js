
const mysql = require("mysql2");

 const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',       
    database: 'freeRbx'
});

db.connect(err => {
    
    console.log("MySQL Connected");
});

module.exports = db;