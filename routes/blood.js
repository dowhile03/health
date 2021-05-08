const express = require("express");
const router = express.Router();

router.get("/find-or-donate-plasma", (req, res) => {
  res.render("blood");
});


router.get("/find-bed-or-oxygen", (req, res) => {
  res.render("oxygen");
})

module.exports = router;
