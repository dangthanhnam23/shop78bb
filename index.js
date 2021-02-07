const path = require('path');
const $ = require( "jquery" );
const express = require('express')
const morgan = require('morgan');
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const md5 = require('md5');
const exphbs  = require('express-handlebars');
const app = express()
const multer  = require('multer')
const upload = multer({ dest: './src/public/uploads/' })
const db = require('./src/config/db');
const dangky = require('./src/routes/login/register');
const creacturl = require('./src/app/controllers/models/checkdb/forcreate')
const fooproduct = require('./src/routes/forproduct')
db();
fooproduct(app);
const sanpham = require('./src/app/controllers/models/course')
const login = require('./src/app/controllers/models/login');
const admin = require('./src/app/controllers/models/admin');
const port = 7872;
const checklogins = require('./src/app/controllers/models/checkdb/register');
const sell = require('./src/app/controllers/models/checkdb/sellcotrolesr');
const warehouse = require('./src/app/controllers/models/checkdb/warehouse');
const renderpost = require('./src/app/controllers/models/checkdb/post');
const course = require('./src/app/controllers/models/course');
const { send } = require('process');
const route = require('./src/routes/index')
const checklogin = require('./src/app/controllers/models/checkdb/checklogins');
const { render } = require('node-sass');
const { json } = require('express');
const { replaceOne } = require('./src/app/controllers/models/course');
route(app)
app.use(express.urlencoded({
  extended: false
}))
app.use(cookieParser());
app.use( express.static(path.join(__dirname, 'src/public')));
app.use(methodOverride('_method'))
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));
app.post("/ondangky" ,  renderpost.postdangky ,  (req, res , next) => {
   
})
app.post("/onlogin" ,  renderpost.postlogin  , (req, res , next) => { 
  
})
app.post('/upavatar' , renderpost.upavatar ,  upload.single('Avatar'), function (req, res , next) {
 
});
app.post('/login/functionsell' ,   sell.functionsell  ,(req , res ) => { 

})
app.post('/ondangxuat', renderpost.postdangxuat ,(req , res ) => { 
  res.clearCookie("cookie");
  res.send('<script>' + 
  'alert("Đã Đăng Xuất Thành Công");' + 
' window.location="/"' +
'</script>') 

})
app.post('/functionsell' ,  sell.functionsell  ,(req , res ) => { 
})
app.get('/browseproducts' ,  sell.functionsell , sell.browseproducts  ,(req , res ) => {
  res.render('sell/browseproducts')
})
app.get('/sellproduct' ,  sell.functionsell , sell.sellproduct  ,(req , res ) => {
})
app.get('/productdelivered' ,  sell.functionsell  ,(req , res ) => {
  res.render('sell/productdelivered')
})
app.get('/Productsnotyetdelivered' ,  sell.functionsell , sell.Productsnotyetdelivered  ,(req , res ) => {
  res.render('sell/Productsnotyetdelivered')
})
app.get('/purchasecustomers' ,  sell.functionsell , sell.purchasecustomers , (req , res ) => {

})
app.get('/' , checklogin.checkcookie , checklogin.rankhome , (req , res ) => {

})
app.post('/deleteproduct' , warehouse.detelewarehouse , (req , res ) => {
  
})
app.get('/login/sellcheck' , checklogin.testcookie  , (req , res ) => {

})

app.get('/test' ,(req , res , next) => {
 res.render('test')
})
app.get('/ontest' ,(req , res , next) => {  
  console.log(req.query);
  console.log("Load Data");
  res.json(req.query)
 })
app.get('/ontest' ,(req , res , next) => {  
  res.json({
    "name" : "PHPStorm",
    "version" : "16.0.1",
    "license" : "commercial" , 
    "hello": "hello đặng Phúc Hòa"
})
console.log('đã chạy vào đây');
})
app.post('/ontests') , (req , res , next) => {  
  console.log('đã chạy vào đây');
 res.json(req.body)
}
app.post('/ontest', upload.array('Avatar', 12), function (req, res, next) {
  console.log(req.files);
  res.json(req.body)
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})
app.post('/pushstock' , renderpost.themkho ,(req , res ) => {  
  
})
app.get('/AccountSettings' , checklogin.data ,  (req , res ) => {  
 
})
//**Kho du lieu */
app.get('/warehouse' , warehouse.warehouse ,  (req , res ) => {  
 
})
app.get('/Customersbrowse' , warehouse.Customersbrowse ,  (req , res ) => {  
 
})
app.get('/customernotdelivered' , warehouse.customernotdelivered ,  (req , res ) => {  
 
})
app.get('/customerndelivered' , warehouse.customerndelivered ,  (req , res ) => {  
 
})
app.post('/oncustomer' ,  warehouse.functioncostomer,  (req , res ) => {  
 
})
//admin//
app.post('/browseproducts-us' ,renderpost.duyetkh, (req , res ) => { 
 
})
app.post('/deteleproducts-us' , renderpost.detelekh ,(req , res ) => { 
            
        })
//-kho du lieu //
app.get('/Accountetion/password' ,    (req , res ) => {  
 res.render('login/password')
})
app.get('/EtionAccount' , checklogin.datas ,  (req , res ) => {  
})
app.get('/search' , checklogin.search , (req , res ) => {  
  
})
app.get('/postproduct' , (req , res ) => {  
  res.render("product/pushproduct")
})
app.post('/pay' ,  renderpost.thanhtoan ,warehouse.detelewarehouse  , (req , res  , next) => {  
  
})
app.post('/onproduct',   upload.array('avatarproduct', 12), renderpost.danglen  , (req , res , next ) => {
  
})
app.post('/Accountetion' , renderpost.Accountetion , (req , res , next) => {  
  
})
app.get('/admin' ,(req , res , next) => {  
  admin.find({})
        .then(logins => {
            logins = logins.map(logins => logins.toObject())
            console.log(logins);
                  res.render("admin/Productmanagement" , {logins})
        })
})
app.post('/etionpassword' , renderpost.doimatkhau, (req , res , next) => {  
  
})
app.post('/binhluan' ,  renderpost.binhluan ,(req , res , next ) => {
  
})
app.post('/Browser' , renderpost.deletepurchasecustomers  ,   (req , res ) => {    
  
})
app.post('/purchasecustomerscheck', renderpost.themcustomernotdelivered ,  renderpost.deletepurchasecustomers ,(req , res , next) => {  
  
})
app.listen( process.env.port || 3000)