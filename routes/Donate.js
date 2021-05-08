const express = require("express");
const router = express.Router();

router.get("/donate-money", (req, res) => {
  res.render("Donate");
});

module.exports = router;