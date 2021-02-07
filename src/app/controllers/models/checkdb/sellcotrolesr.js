const { model, models } = require('mongoose');
const onclick = require('./onclick'); 
const db = require('../../../../config/db/index');
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
let usernamess = {} ;
app.use(cookieParser());
db.connect;
const login = require('../login');
const sanpham = require('../course');
const md5 = require('md5');
const { join } = require('path');
module.exports.functionsell = function (req , res , next) {
    console.log(req.body.function);
    if (req.body.function == "Danh Sách Chớ Duyệt")  {
      req.body.function =" "
      res.redirect("/browseproducts")
    }
    if (req.body.function == "Đăng Tạo Sản phẩm")  {
      req.body.function =" "
      res.redirect("/postproduct")
    }
    if (req.body.function == "Hàng khách Chớ Duyệt")  {
      req.body.function =" "
      console.log(req.body.function);
      res.redirect("/purchasecustomers")
    }
    if (req.body.function == "Danh sách Chưa Giao")  {
      req.body.function = " "
      console.log(req.body.function);
      res.redirect("/Productsnotyetdelivered")
    }
    if (req.body.function == "Danh sách đã giao")  {
      req.body.function = " "
      res.redirect("/productdelivered")
    }
    if (req.body.function == "Danh Sách Sản phẩm")  {
      req.body.function = " "
      res.redirect("/ ")
    }
    next()
  }
  module.exports.sellproduct = function  (req , res , next) {
    login.find({cookie :req.cookies.cookie})
      .then(logins => {
        array = [];
        logins = logins.map(login => login.toObject())
      loginss  = logins.map(function(item) {
         if(item.cookie == req.cookies.cookie ) {
          loginsss = item.postproduct.map(function(productcheckitem) {
            array.push(productcheckitem)
            res.render('sell/sellproduct' , {array});
            console.log(array);
          })
         }
      })
     })
      .catch(next);
    
  }
  module.exports.browseproducts = function  (req , res , next) {
    login.find({cookie :req.cookies.cookie})
    .then(logins => {
    array = [];
    logins = logins.map(login => login.toObject())
      loginss  = logins.map(function(item) {
         if(item.cookie == req.cookies.cookie ) {
          loginsss = item.browseproducts.map(function(productcheckitem) {
            array.push(productcheckitem)
            res.render('sell/browseproducts ' , {array});
            console.log(array);
          })
         }
      })
     })
      .catch(next);
    
  }
  module.exports.purchasecustomers = function  (req , res , next) {
    login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
      if(item.cookie == req.cookies.cookie ) {
        console.log(item.khachhangchoduyet);
        arrayss = [];
        item.khachhangchoduyet.map(function(itemss) {
          arrayss.push(itemss)
        })
         console.log( "array",arrayss);
          res.render('sell/purchasecustomers' , {arrayss});
      }
    })
   })
  }
  module.exports.Productsnotyetdelivered = function  (req , res , next) {
    login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
      if(item.cookie == req.cookies.cookie ) {
        console.log(item.purchasecustomers);
        arrayss = [];
        item.Productsnotyetdelivered.map(function(itemss) {
          arrayss.push(itemss)
        })
         console.log( "array",arrayss);
          res.render('sell/Productsnotyetdelivered' , {arrayss});
      }
    })
   })
  }