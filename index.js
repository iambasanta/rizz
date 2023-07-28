"use strict";

const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");

const PORT = process.env.PORT || 8000;
app.use(express.json());

const rizzMe = async () => {
  const options = {
    method: "GET",
    url: process.env.API_URL,
  };

  try {
    const response = await axios.request(options);
    console.log(response.data.pickup);
  } catch (error) {
    console.error(error);
  }
};

rizzMe()

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
