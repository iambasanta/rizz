"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./routes/index");

const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
