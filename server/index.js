require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const port = 3001;
const user = process.env.user;
const password = process.env.password;
const database = process.env.database;

const db = mysql.createPool({
  host: "localhost",
  user: user,
  password: password,
  database: database,
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      db.query(
        "INSERT INTO users (name, email, password) VALUES(?, ?, ?)",
        [name, email, password],
        (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send({ msg: "sucsess register" });
        }
      );
    } else {
      res.send({ mgs: "user aready registered" });
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
