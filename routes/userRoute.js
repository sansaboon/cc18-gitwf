const express = require("express");
const userRoute = express.Router();

userRoute.get("/info", (req, res) => {
  res.send("user route");
});

module.exports = userRoute;
