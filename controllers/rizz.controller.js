const axios = require("axios");
require("dotenv").config();

const rizzMe = async (req, res) => {
  const options = {
    method: "GET",
    url: process.env.API_URL,
  };

  try {
    const response = await axios.request(options);
    res.render("rizz/index", { rizz: response.data.pickup });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { rizzMe };
