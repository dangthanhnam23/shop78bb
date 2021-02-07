const express = require('express')
const router = express.Router()
const menucotrollers = require('../app/controllers/menucotrollers');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads' })
router.get('/' , menucotrollers.index)
router.get('/nuocngoai' , menucotrollers.nuocngoai)
router.get('/trongnuoc' , menucotrollers.trongnuoc)
router.get('/quanao' , menucotrollers.aoquan)
router.get('/chatnhom' , menucotrollers.chatnhom)
router.get('/khoahoc' , menucotrollers.khoahoc)
router.get('/gamenongtrai' , menucotrollers.gamenongtrai)
module.exports = router;