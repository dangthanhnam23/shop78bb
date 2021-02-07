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
module.exports.warehouse = function (   req , res , next) {  
    login.find({cookie :req.cookies.cookie})
      .then(logins => {
        array = [];
        logins = logins.map(login => login.toObject())
      loginss  = logins.map(function(item) {
         if(item.cookie == req.cookies.cookie ) {
           console.log(item.dathemvaokho)
           array = item.dathemvaokho
            res.render('product/warehouse' , {array});
         }
      })
     })
      .catch(next);
  }
  module.exports.Customersbrowse = function (   req , res , next) {  
    login.find({cookie :req.cookies.cookie})
      .then(logins => {
        array = [];
        logins = logins.map(login => login.toObject())
      loginss  = logins.map(function(item) {
         if(item.cookie == req.cookies.cookie ) {
          loginsss = item.productcheck.map(function(productcheckitem) {
            array.push(productcheckitem)
            res.render('product/Customersbrowse' , {array});
            console.log(array);
          })
         }
      })
     })
      .catch(next);
  }
  module.exports.customernotdelivered = function (   req , res , next) {  
    login.find({cookie :req.cookies.cookie})
      .then(logins => {
        array = [];
        logins = logins.map(login => login.toObject())
      loginss  = logins.map(function(item) {
         if(item.cookie == req.cookies.cookie ) {
          loginsss = item.productoffsell.map(function(productcheckitem) {
            array.push(productcheckitem)
            res.render('product/customernotdelivered' , {array});
            console.log(array);
          })
         }
      })
     })
      .catch(next);
  }
  module.exports.customerndelivered = function (   req , res , next) {  
    login.find({cookie :req.cookies.cookie})
      .then(logins => {
        array = [];
        logins = logins.map(login => login.toObject())
      loginss  = logins.map(function(item) {
         if(item.cookie == req.cookies.cookie ) {
          loginsss = item.productcheck.map(function(productcheckitem) {
            array.push(productcheckitem)
            res.render('product/customerndelivered' , {array});
            console.log(array);
          })
         }
      })
     })
      .catch(next);
  }
  module.exports.customerndelivered = function (   req , res , next) {  
    login.find({cookie :req.cookies.cookie})
      .then(logins => {
        array = [];
        logins = logins.map(login => login.toObject())
      loginss  = logins.map(function(item) {
         if(item.cookie == req.cookies.cookie ) {
          loginsss = item.productcheck.map(function(productcheckitem) {
            array.push(productcheckitem)
            res.render('product/customerndelivered' , {array});
            console.log(array);
          })
         }
      })
     })
      .catch(next);
  }
  module.exports.functioncostomer = function (   req , res , next) {
    console.log(req.body.function);  
    if (req.body.function == "Hàng đã Giao")  {
      req.body.function = " "
      res.redirect("/customerndelivered")
    }
    if (req.body.function == "Hàng Đang giao")  {
      req.body.function =" "
      res.redirect("/customernotdelivered")
    }
    if (req.body.function == "Đang Chớ Bán Hàng Duyệt")  {
      req.body.function =" "
      console.log(req.body.function);
      res.redirect("/Customersbrowse")
    }
    if (req.body.function == "Kho Hàng")  {
      req.body.function = " "
      console.log(req.body.function);
      res.redirect("/warehouse")
    }
    next()
  }
  module.exports.detelewarehouse = function(req , res , next) {
    console.log(login);
  var indexs  ; 
  login.find({})
  .then(logins => {
     logins = logins.map(login => login.toObject())
   loginss  = logins.map(function(item) {
    if(item.cookie == req.cookies.cookie) {
      item.dathemvaokho.map(function(itemss , index) {
        var array  = item; 
        if(itemss._id == req.body.ID) {
               indexs = index;
        }
      })
      console.log(indexs);
       var deteles = indexs - 1
       if(deteles  <=  0) {
        deteles = 0;
        item.dathemvaokho.splice( 0 ,  1 )
      }else{
        item.dathemvaokho.splice(deteles , deteles )
      }
      console.log(deteles);
      console.log( "item" ,item.dathemvaokho);
       login.updateOne({cookie : req.cookies.cookie}, {
        dathemvaokho : item.dathemvaokho
       }  
    ).then((result) => {
      res.status(200).json({
          status: result
      });
    })
    .catch((err) => {
      res.status(500).json({
          status: 'invalid',
          err: err
      })
    })
    res.redirect('/warehouse')
    next()
    }
    })
    })

  } 