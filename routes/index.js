const express = require("express");
const router = express.Router();

const RizzRouter = require("./rizz.router.js");

router.use("/rizz", RizzRouter);

module.exports = router;
