require("dotenv").config();
const express = require("express");
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
