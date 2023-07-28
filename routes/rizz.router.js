const express = require("express");
const router = express.Router();

const { rizzMe } = require("../controllers/rizz.controller");

router.get("/", rizzMe);

module.exports = router;
