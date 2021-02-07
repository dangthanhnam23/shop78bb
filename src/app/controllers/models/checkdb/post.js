const md5 = require('md5');
const login = require('../login');
const sanpham = require('../course')
const admin = require('../admin');
module.exports.postdangky = function(req , res , next) {
    data = req.body
  req.body.dangchopheduyet = []
    req.body.dathemvaokho = []
    req.body.monhangchuagiao = []
    req.body.monhangdagiao = []
    req.body.Password = md5(req.body.Password);
    req.body.cookie = md5 (req.body.Username , req.body.Password)
    res.cookie(req.body.cookie)
logins = new login(req.body);
logins.save();
res.send('<script>' + 
  'alert("bạn đăng ky thành công . Chuyển Qua Đăng nhập");' + 
' window.location="/login"' +
'</script>') 
}
module.exports.postlogin = function(req , res , next) {
    let taikhoan = 0 ; 
  let Password = md5(req.body.Password);
  login.find({})
.then(logins => {
console.log(logins.length);
logins = logins.map(login => login.toObject())
loginss = logins.map(function(item) {
 if(item.Username == req.body.Username) {
   console.log(Password);
    if (item.Password == Password ) {
     res.cookie( "cookie" ,item.cookie)
     res.send('<script>' + 
     'alert("bạn Đăng nhập Thành Công");' + 
   ' window.location="/"' +
   '</script>') 
    }else {
      res.send('<script>' + 
  'alert("bạn đã sai mất khẩu");' + 
' window.location="/login"' +
'</script>') 
    }
}else { 
  taikhoan++ 
}
}) 
  if(taikhoan == logins.length) {
         res.send("bạn chưa tài khoản ")
} 
})
}
module.exports.upavatar = function(req , res , next) {
     // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any 
  console.log(req.file, req.body)
  req.body.avatar = "/" + req.file.path.split("\\").splice(2, 3).join('/');
  console.log(req.body.avatar);
  login.updateOne({cookie : req.cookies.cookie} , req.body)
  .then(() =>res.send('da them vao'))
  .catch(next)
}
module.exports.postdangxuat = function(req , res , next) {
    res.clearCookie("cookie");
    res.send('<script>' + 
    'alert("Đã Đăng Xuất Thành Công");' + 
  ' window.location="/"' +
  '</script>') 
}
module.exports.themkho = function(req ,res , next) {
    res.send("đi qua");
  console.log('đã chạy vào đây');
  sanpham.find({})
  .then(logins => {
     logins = logins.map(login => login.toObject())
   loginss  = logins.map(function(item) {
      if (item._id == req.body.id ) {
        let array = [];
        array.push(item);
        console.log(array);
        console.log(req.cookies.cookie);
        login.updateOne({cookie: req.cookies.cookie},{
            $push: {
              dathemvaokho : array
           }
        }).then((result) => {
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
        res.json(req.body)
      }
   })
  })
}
module.exports.duyetkh = function(req , res , next) {
    console.log(req.body.url);
    admin.find({})
    .then(logins => { 
    logins = logins.map(login => login.toObject())
     loginss  = logins.map(function(item) {
          if (item._id == req.body.id) {
            req.body.nguoidang =  item.nguoidang
              req.body.img =  item.img
              req.body.cmt = item.cmt
              req.body.avatarproduct = item.avatarproduct
              req.body.nameproduct = item.nameproduct   
              req.body.priceproduct = item.priceproduct  
              req.body.amountproduct = item.amountproduct 
              req.body.content =  item.content 
              req.body.xuathang = item.xuathang
              req.body.like = item.like
              req.body.url =item.url
              console.log(req.body.id);
              sanphams = new sanpham(req.body);
              sanphams.save();
              admin.deleteOne({_id : req.body.id }).then((result) => {
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
            res.redirect("/admin")
          }
      })
    })
}
module.exports.detelekh = function(req , res , next ) {
    admin.deleteOne({_id : req.body.id }).then((result) => {
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
    res.redirect("/admin")
}
module.exports.thanhtoan = function(req , res , next ) {
    let index = 0;
  login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
      if(item.cookie == req.cookies.cookie) {
        index++
        console.log ( "body" , req.body);
          let array = [{
            Username : item.FirstName + " " + item.LastName ,
            Name : req.body.nameproduct ,
            priceproduct :req.body.priceproduct ,
            amountproduct : req.body.amountproduct , 
            phonenumber: req.body.phonenumber , 
            address : req.body.address , 
            sell: item.FirstName + item.LastName ,
            nguoimua : req.cookies.cookie ,
            nguoidang : req.body.nguoidang ,
            id : md5(item._id , index)
          }] 
          console.log ( "array" , array);
          console.log(req.cookies.cookie);
          console.log(item.cookie);
          login.updateOne({cookie : req.body.nguoidang }, {
            $push: {
              khachhangchoduyet : array
           }
        }).then((result) => {
          console.log('đã thành công ');
            res.re(200).json({
                status: result
            });
          })
          .catch((err) => {
            res.status(400).json({
                status: 'invalid',
                err: err
            })
        
        })
        login.updateOne({cookie : req.cookies.cookie }, {
          $push: {
            dangchopheduyet : array
         }
      }).then((result) => {
        console.log('đã thành công ');
          res.re(200).json({
              status: result
          });
        })
        .catch((err) => {
          res.status(400).json({
              status: 'invalid',
              err: err
          })
      
      })
      }
    })
   })
    .catch(next);
}
module.exports.danglen = function(req ,res , next) {
    var data = req.body
 req.body.cmt = [];
 req.body.like = 0; 
 req.body.url = md5(req.body.nameproduct ,req.body.amountproduct) ;
 req.body.avatarproducts =  req.files;
 req.body.avatarproduct  = req.files[0].path.split("\\").splice(2, 3).join('/'); 
 req.body.nguoidang = req.cookies.cookie; 
console.log( req.body.avatarproduct)
 console.log(req.file);
 admins = new admin(req.body); 
 admins.save();
 logins = new login(req.body);
 createarray =[{
  nameproduct : data.nameproduct, 
  priceproduct : data.priceproduct, 
  amountproduct :data.amountproduct, 
  content : data.content,
  url : req.body.url,
  tag : data.tag , 
  avatarproduct : data.avatarproduct , 
  nguoidang : req.cookies.cookie,
 }]
 console.log(createarray);
 login.updateOne({
  cookie: req.cookies.cookie
}, {
 $push: {
  postproduct : createarray
}}).then((result) => {
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
}
module.exports.Accountetion = function(req, res , next) {
    login.updateOne({cookie : req.cookies.cookie} , req.body)
  .then(() =>res.send('Đã Sữa Thành Công'))
  .catch(next)
}
module.exports.doimatkhau = function(req , res ,next) {
    login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie 
        && req.body.Passwords1 == req.body.Passwords2 
        &&item.Password == req.body.Password) {
          console.log(md5(req.body.Passwords2));
          req.body.Password = md5(req.body.Passwords2)
          login.updateOne({cookie : req.cookies.cookie }, req.body).then((result) => {
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
      }
    })
   })
    .catch(next);
}
module.exports.binhluan = function(req , res ,next ) {
    login.find({cookie :req.cookies.cookie})
    .then(logins => {
      logins = logins.map(login => login.toObject())
    loginss  = logins.map(function(item) {
       if(item.cookie == req.cookies.cookie ) {
          req.body.avatar = item.avatar
          req.body.username = item.FirstName + " " + item.LastName
          let array = [{
            Name : req.body.username ,
            src :  req.body.avatar ,  
            binhluan : req.body.CMT , 
          }] 
          console.log(array);
          console.log(req.body.url);
          sanpham.updateOne({url : req.body.url }, {
            $push: {
              cmt : array
           }
        }).then((result) => {
            res.re(200).json({
                status: result
            });
          })
          .catch((err) => {
            res.status(500).json({
                status: 'invalid',
                err: err
            })
        
        })
      }
    })
   })
    .catch(next);
}
//
module.exports.deletepurchasecustomers = function(req , res , next) {
    let array = []
  var indexs  ; 
  login.find({})
        .then(logins => {
            logins = logins.map(logins => logins.toObject())
            loginss  = logins.map(function(item) {
           item.purchasecustomers.map(function(itemss , index) {
             if(itemss.id == req.body.id) {
               //-xóa //
               indexs = index;
             }
       })
        var deteles = indexs - 1
        if(deteles <= 0) {
         deteles = 0;
         item.purchasecustomers.splice( 0 ,  1 )
       }else{
         item.purchasecustomers.splice(deteles , deteles )
       }
        login.updateOne({cookie : req.cookies.cookie}, {
         purchasecustomers : item.purchasecustomers
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
        })
        //xongxoa
        //them//khach truoc
        
})
next()
}
module.exports.themcustomernotdelivered = function(req , res , next) {
    let array = []
  var indexs  ; 
  login.find({})
        .then(logins => {
            logins = logins.map(logins => logins.toObject())
            loginss  = logins.map(function(item) {
           item.purchasecustomers.map(function(itemss , index) {
             if(itemss.id == req.body.id) {
                 console.log( "item",itemss.nguoidang);
               array.push(itemss) ; 
               console.log( "arrays", array);
               login.updateOne({cookie : itemss.nguoidang}, {
                $push: {
                  Productsnotyetdelivered : array
                 }
               
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
                  login.updateOne({cookie : itemss.nguoimua}, {
                    $push: {
                      productoffsell : array
                     }
                   
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
             }
       })
        })
})
next()
}
module.exports.deletecustomernotdelivered = function(req , res , next) {
  let array = []
var indexs  ; 
login.find({})
      .then(logins => {
          logins = logins.map(logins => logins.toObject())
          loginss  = logins.map(function(item) {
         item.purchasecustomers.map(function(itemss , index) {
           if(itemss.id == req.body.id) {
               console.log( "item",itemss.nguoidang);
             array.push(itemss) ; 
             console.log( "arrays", array);
             login.updateOne({cookie : itemss.nguoidang}, {
              $push: {
                Productsnotyetdelivered : array
               }
             
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
                login.updateOne({cookie : itemss.nguoimua}, {
                  $push: {
                    customernotdelivered : array
                   }
                 
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
           }
     })
      })
})
next()
}
module.exports.deletepurchasecustomers = function()  {

}