
const mysql = require("mysql2");

// USE A POOL (required for DB4Free)
const db = mysql.createPool({
  host: "db4free.net",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

module.exports = db;
