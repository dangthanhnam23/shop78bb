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

module.exports.checkcookie = function  (req , res , next) { 
  console.log('đã chạy đây');
  console.log(req.cookies.cookie);
  if(!req.cookies.cookie) {
    console.log('bạn là khách ');
    res.render('Home/home');
  }else{
    login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie ) {
         console.log(item);
        var usernames = Object.assign(item, usernamess);
        res.render('Home/home' , {usernames}) ;
       }
       
    })
   })
    .catch(next);
  }
  next();
}

module.exports.search = function  (req , res , next) { 
  let array = []
  sanpham.find({})
  .then(logins => {
     logins = logins.map(login => login.toObject())
   loginss  = logins.map(function(item) {
     console.log( item.nameproduct);
     var arrayname = item.nameproduct.split(' ');
     arrayname.map(function(items) {
      console.log( "arrayname" ,items);
       if(items == req.query.Timkiem ) {
         console.log('đã vào đây');
        array.push(item);
       }
     })
     if( item.tag == "undefined") {
     var arraytag = item.tag.split(',');
     arraytag.map(function (items) {
      if(items == req.query.Timkiem ) {
        console.log( "arraytag" ,items);
       array.push(item);
      }
    })
      }
      if(item.tag == req.query.Timkiem ) {
        console.log('đã vào đây');
       array.push(item);
      }
      if(item.nameproduct == req.query.Timkiem ) {
        console.log('đã vào đây');
       array.push(item);
      }
    })
      console.log("array" ,array);
      res.render("product/search" ,{array} )
   })
}
module.exports.rank =  function  (req , res , next) { 
  console.log(req.cookies.cookie);
  login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie) {
         if(item.rank == "ADMIN" || item.rank == "sell") {
           next()
         }else {
           res.send('bạn không thuộc rank này . xin phép admin để lên rank')
         }
       }
    })
   })
 .catch(next);
 }
 module.exports.rankhome =  function  (req , res , next) { 
  login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie ) {
         if(item.rank == "ADMIN") {
         }else if( item.rank == "sell") {
          document.addEventListener('DOMContentLoad', function() {
           
           })
         } else{
           console.log('Bạn là khách hàng');
         }
       }
    })
   })
    .catch(next);
    next();
 }

module.exports.testcookie = function(req , res , next) { 
  console.log( 'load' , req.cookies);
  login.find({})
  .then(logins => {
     logins = logins.map(login => login.toObject())
   loginss  = logins.map(function(item) {
      if (item.cookie == req.cookies.cookie ) {
          console.log(item);
      }
   })
  })
}
module.exports.data = function (   req , res , next) {  
  login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie ) {
        res.render('login/AccountSettings' , {item}) ;
       }
       
    })
   })
    .catch(next);
}
module.exports.datas = function (   req , res , next) {  
  login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie ) {
        res.render('login/EtionAccount' , {item}) ;
       }
       
    })
   })
    .catch(next);
}
module.exports.warehouse = function (   req , res , next) {  
  login.find({cookie :req.cookies.cookie})
    .then(logins => {
      array = [];
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie ) {
         console.log(item.productcheck)
         array = item.productcheck
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
        loginsss = item.customernotdelivered.map(function(productcheckitem) {
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
module.exports.functionadmin = function (   req , res , next) {
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
module.exports.yourpassword  = function(req , res , next) { 
  req.body.Password = md5(req.body.Password);
  login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie 
        && req.body.Passwords1 == req.body.Passwords2 
        &&item.Password == req.body.Password) {
          console.log(md5(req.body.Passwords2));
          req.body.Password = md5(req.body.Passwords2)
          login.updateOne({cookie : req.cookies.cookie },req.body )}
    })
   })
    .catch(next);
}
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
    res.redirect("/sellproduct")
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
      console.log(item.purchasecustomers);
      arrayss = [];
      item.purchasecustomers.map(function(itemss) {
        arrayss.push(itemss)
      })
       console.log( "array",arrayss);
        res.render('sell/purchasecustomers' , {arrayss});
    }
  })
 })
}
module.exports.deleteproduct = function(req , res , next ) {
  console.log(login);
  var indexs  ; 
  login.find({})
  .then(logins => {
     logins = logins.map(login => login.toObject())
   loginss  = logins.map(function(item) {
    if(item.cookie == req.cookies.cookie) {
      item.productcheck.map(function(itemss , index) {
        var array  = item; 
        if(itemss._id == req.body.ID) {
               indexs = index;
        }
      })}
      console.log(indexs);
       var deteles = indexs - 1
       if(deteles  < 0) {
        deteles = 0;
        item.productcheck.splice(0 , 1 )
      }else{
        item.productcheck.splice(deteles , deteles )
      }
      console.log(deteles);
      console.log( "item" ,item.productcheck);
       login.updateOne({cookie : req.cookies.cookie}, {
        productcheck : item.productcheck
       }
    ).then((result) => {
      console.log('đã xóa thành công');
      res.status(200).json({
          status: result
      });
})
    }
  )})
  next()
}
module.exports.push = function(req , res , next ) {
  console.log(login);
  var indexs  ; 
  login.find({})
  .then(logins => {
     logins = logins.map(login => login.toObject())
   loginss  = logins.map(function(item) {
    if(item.cookie == req.cookies.cookie) {
      item.productcheck.map(function(itemss , index) {
        var array  = item; 
        if(itemss._id == req.body.ID) {
               indexs = index;
        }
      })}
      console.log(indexs);
       var deteles = indexs - 1
       if(deteles  < 0) {
        deteles = 0;
        item.productcheck.splice(0 , 1 )
      }else{
        item.productcheck.splice(deteles , deteles )
      }
      console.log(deteles);
      console.log( "item" ,item.productcheck);
       login.updateOne({cookie : req.cookies.cookie}, {
        productcheck : item.productcheck
       }
    ).then((result) => {
      console.log('đã xóa thành công');
      res.status(200).json({
          status: result
      });
})
    }
  )})
  next()
}
