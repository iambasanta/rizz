"use strict";

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
