var login = require('../../models/login');
module.exports.checklogin = function( req , res , next){
var i = 0;
login.find({})
.then(logins => {
console.log(logins.length);
logins = logins.map(login => login.toObject())
loginss = logins.map(function(item) {
 if(item.Username !== req.body.Username) {
    console.log(item.Username );
 i++;
}
}) 
console.log(i);
  if(i !== logins.length) {
   res.send('<script>' + 
   'alert("tài Khoản của bạn đã có đăng ký");' + 
 ' window.location="/login/dangky"' +
 '</script>') 
} else {
 next();
}
})
}
module.exports.checklogintrue  = function(req , res , next) {
}

