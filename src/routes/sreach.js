const express = require('express')
const router = express.Router()
const sreachcotrollers = require('../app/controllers/sreachcotrollers');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads' })
router.post('/' , sreachcotrollers.index)
module.exports = router;