const express = require('express');
const router = express.Router();
const daignosis = require('../controllers/daignosis')

router.post('/showdata',daignosis.getData)
router.get('/showdata',daignosis.showdata)



module.exports = router;