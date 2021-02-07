const loginRouter = require('./login')
const express = require('express')
const app = express()
const productRouter = require('./product')
const cookieParser = require('cookie-parser')
const menusRouter = require('./menu')
const checklogin = require('../app/controllers/models/checkdb/checklogins')
const sreachrouter = require('./sreach');
const checkdb = require('../app/controllers/models/checkdb/checklogins')
app.use(cookieParser());
function route(app) {
app.use('/menu' , menusRouter)
app.use('/login'  , loginRouter);
app.use('/product' , productRouter)
app.use('/search' , sreachrouter)
}
module.exports = route;