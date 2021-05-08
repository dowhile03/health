const express = require("express");
const router = express.Router();

router.get("/diagnose", (req, res) => {
  res.render("diagnose");
});


router.get("/find-bed-or-oxygen", (req, res) => {
  res.render("oxygen");
})

module.exports = router;
