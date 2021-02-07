const express = require('express')
const router = express.Router()
const productcotrollers = require('../app/controllers/productcotrollers');
router.get('/' , productcotrollers.index)
router.get('/etionweb' , productcotrollers.etionweb)
router.get('/creactproduct' , productcotrollers.admin)
router.get('/browser-admin' , productcotrollers.pheduyetadmin)
router.get('/product' , productcotrollers.pheduyetadmin)
module.exports = router;
