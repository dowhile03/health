const express = require("express");
const router = express.Router();
const oxygen = require("../controllers/oxygen");

router.get("/diagnose", (req, res) => {
  res.render("diagnose");
});

router.get("/find-bed-or-oxygen", (req, res) => {
  res.render("oxygen");
});

router.post("/find-bed-or-oxygen", oxygen.getDetails);

router.get("/message", (req, res) => {
  res.render("message");
});

router.post('/fetchadmindata',oxygen.adminlogin);

router.get('/fetchadmindata',oxygen.fetchData);
router.get('/admin',(req, res) => {
  res.render('admin')
})

module.exports = router;
