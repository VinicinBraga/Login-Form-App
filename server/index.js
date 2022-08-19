const express = require("express");
const app = express();
const mysql = require("mysql");

const port = 3001;

const db = mysql.createPool({
  host: "localhost",
  user: "vinicin",
  password: "08003484",
  database: "user_data_base",
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
