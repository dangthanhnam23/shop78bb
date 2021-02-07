const sanpham  = require('../controllers/models/course')
const express = require('express')
const app = express()
const datalogin = require('../../app/controllers/models/login')
const logindb = require('../controllers/models/login')
app.use(express.urlencoded({
    extended: true
  }))
class NewController {
  index(req , res ,next) {
    sanpham.find({xuathang : 'hangsonghinh'})
    .then(sanphams => {
        sanphams = sanphams.map(sanpham => sanpham.toObject())
         let page = req.query.page;  
         let end = page * 8
         let start = end - 8
        var sanphamss =  sanphams.slice(start , end); 
        console.log(sanphamss);
              res.render('menu/hangsonghinh', {sanphamss});
  })
}
  nuocngoai(req , res ,next) {
    sanpham.find({xuathang : 'hanguocngoai'})
    .then(sanphams => {
        sanphams = sanphams.map(sanpham => sanpham.toObject())
        res.render('menu/thegioi', {sanphams});
    })
    .catch(next);
  }
  trongnuoc(req , res ,next) {
    sanpham.find({xuathang : 'hangtrongnuoc'})
    .then(sanphams => {
        sanphams = sanphams.map(sanpham => sanpham.toObject())
        res.render('menu/trongnuoc', {sanphams});
    })
    .catch(next);
  }
  aoquan(req , res ,next) {
    sanpham.find({tag : 'Quần Áo'})
    .then(sanphams => {
        sanphams = sanphams.map(sanpham => sanpham.toObject())
       sanphams.map(function(item) {
let Objectsa = item.avatarproduct[0].path;
              res.render('menu/Aoquan', {sanphams , Objectsa});
    })
    .catch(next);
  })
}
ruu(req , res ,next) {
  sanpham.find({tag : 'Quần Áo'})
  .then(sanphams => {
      sanphams = sanphams.map(sanpham => sanpham.toObject())
     sanphams.map(function(item) {
let Objectsa = item.avatarproduct[0].path;
            res.render('menu/Aoquan', {sanphams , Objectsa});
  })
  .catch(next);
})
}
anvat(req , res ,next) {
  sanpham.find({tag : 'Quần Áo'})
  .then(sanphams => {
      sanphams = sanphams.map(sanpham => sanpham.toObject())
     sanphams.map(function(item) {
let Objectsa = item.avatarproduct[0].path;
            res.render('menu/Aoquan', {sanphams , Objectsa});
  })
  .catch(next);
})
}
chatnhom(req , res ,next) {
            res.render('menu/link404');
}
khoahoc(req , res ,next) {
  res.render('menu/link404');
}
gamenongtrai(req , res ,next) {
  res.render('menu/link404');
}
}
module.exports = new NewController; 
