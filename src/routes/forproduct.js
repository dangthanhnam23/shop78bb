const product = require('../app/controllers/models/course')
const login = require('../app/controllers/models/login')
function fooproduct(app) {
product.find({})
.then(logins => {
logins = logins.map(login => login.toObject())
loginss  = logins.map(function(item) {
app.get('/product/' + item.url ,(req , res ) => {
let array = [];
 product.find({url : item.url}).then(products => {
      products = products.map(login => login.toObject())
       productss  = products.map(function(itemp) {
          console.log("items" ,itemp);
   if (itemp.cmt.length == 0 ) {
      res.render("product/product" ,{item}) 
      }
      itemp  = itemp.cmt.map(function(itemps) {
          console.log(itemp.cmt);
let path = req.path.split("/").splice(2 , 3).join("/");
   if (itemps.url = path ) {
      array.push(itemps);
      console.log(array)
   res.render("product/product" ,{item , array , itemps}) 
   }
   })
   })
   })
   })
    app.get('/product/' + item.url + "/etionproduct" ,(req , res ) => {

      product.find({url : item.url}).then(products => {
         products = products.map(login => login.toObject())
          productss  = products.map(function(iteml) {
            res.render("product/productetion" ,{item , iteml})
          })
         })
   })
   app.get('/product/' + item.url + "/thanhtoan" ,(req , res ) => {
      console.log("đã chạy vào");
      login.find({cookie : req.cookies.cookie}).then(products => {
         products = products.map(login => login.toObject())
          productss  = products.map(function(iteml) {
             console.log(item);
             console.log(item.nguoidang);
             iteml.nguoimua = req.cookies.cookie;
            res.render("login/pay" ,{item , iteml})
          })
         })
   })
   })
   })
   login.find({})
   .then(logins => {
   logins = logins.map(login => login.toObject())
   loginss  = logins.map(function(item) {
   app.get('/ID=' + item.cookie ,(req , res ) => {
   if(item.rank == "Sell" || item.rank == "ADMIN") {
   res.render('login/personal' ,{item})
   }
   })
   })
})
}

module.exports = fooproduct;