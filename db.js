
const mysql = require("mysql2");

// DEBUG: log env presence (not values)
console.log("DB ENV CHECK:", {
  DB_USER: !!process.env.DB_USER,
  DB_PASS: !!process.env.DB_PASS,
  DB_NAME: !!process.env.DB_NAME
});

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

// TEST CONNECTION ON STARTUP
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MYSQL CONNECTION ERROR:");
    console.error("CODE:", err.code);
    console.error("ERRNO:", err.errno);
    console.error("SQLSTATE:", err.sqlState);
    console.error("MESSAGE:", err.message);
    return;
  }

  console.log("✅ MYSQL CONNECTED SUCCESSFULLY");
  connection.release();
});

module.exports = db;
