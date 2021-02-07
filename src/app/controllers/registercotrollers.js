class NewController {
    register(req , res) {
        res.render('login/register')
    }
    login(req , res) {
        res.render('login/register')
    }   
    createlogin(req , res) {
var body = req.body 
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
  logins.updataOne({
    cookie : req.body.cookie 
  }, logins.ifcookie.push(array));
  logins.save();
  res.send("đã Chớ duyệt")
    }
}
module.exports = new NewController; 
