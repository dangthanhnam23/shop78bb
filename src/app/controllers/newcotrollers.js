const md5 = require('md5');
const express = require('express')
const morgan = require('morgan');
const cookieParser = require('cookie-parser')
const app = express()   
const login = require('./models/login')
app.use(express.urlencoded({
    extended: true
  }))
  app.use(cookieParser());
class NewController {
    index(req , res) {
        console.log("hello");
           res.send('hello part new')
    }
    dangky(req , res) {
        res.render('login/register');
    }
    ondangky(req , res) {
        var body = req.body 
        console.log(body);
        req.body.Password = md5(req.body.Password);
        res.cookie("user-id" , 112334);
        console.log(md5(req.cookies));
        var cookie = md5(req.cookies);
        req.body.cookie = md5(req.cookies);
        const logins = new login(req.body);
        var array = [
            {
                name:req.body.Username , 
                Password:req.body.Password 
            }
        ]
        console.log(array);
        res.send("đã Chớ duyệt")
        }
}
module.exports = new NewController; 
