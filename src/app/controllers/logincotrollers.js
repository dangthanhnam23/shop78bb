
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
const datalogin = require('../../app/controllers/models/login')
const logindb = require('../controllers/models/login')
app.use(express.urlencoded({
    extended: true
  }))
class NewController {
    index(req , res) {
        res.render('login/register')
    }
    login(req , res) {
        res.render('login/login')
    }
    this(req , res) {
        res.render('login/th')
    }
    onndangky (req , res ,) {
        console.log(req.body);
        const logins = new logindb(req.body);
        logins.save();
        res.send('da luu thanh cong')
    }
    admin(req , res) {
    }
    khousername(req , res , next) {
        datalogin.find({})
     .then(logins => {
        logins = logins.map(login => login.toObject())
        res.render('login/khousername' , {logins});
     })
     .catch(next);
       
    }
    creactmenber(req , res , next) { 
 res.send('trang thêm menber')
    }
    upavatar (req , res , next) { 
      res.render('login/upavatar')
           }
sell (req , res , next) { 
res.render('login/sell')
}
sellcheck (req , res , next) { 
    
}
ProductManagement (req , res , next) { 
    res.render('admin/ProductManagement')
}
}
module.exports = new NewController; 
