const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");

router.get('/admin',(req, res) => {
    res.render('admin')
})


router.post('/fetchadmindata',admin.adminlogin);

router.get('/fetchadmindata',admin.fetchData);

module.exports = router;