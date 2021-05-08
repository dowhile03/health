const express = require("express");
const router = express.Router();

router.get("/Helpline", (req, res) => {
  res.render("helpline");
});

module.exports = router;