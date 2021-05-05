const express = require("express");
const router = express.Router();

router.get("/find-or-donate-blood", (req, res) => {
  res.render("blood");
});

module.exports = router;
