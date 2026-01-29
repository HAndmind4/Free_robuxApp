
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "db4free.net",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5
});

db.connect(err => {
    
    console.log("MySQL Connected");
});

module.exports = db;
