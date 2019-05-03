const express = require("express");
const server = require("http").Server(express);
const io = require("socket.io")(server);
const Campaign = require("../models/Campaign");
const router = express.Router();
const Zone = require("../models/Zone");

router.get("/", (req, res) => {
  res.render("player", { layout: false });
});

module.exports = router;