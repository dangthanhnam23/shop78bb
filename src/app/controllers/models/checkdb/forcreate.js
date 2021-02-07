const { model } = require('mongoose');
const onclick = require('./onclick'); 
const db = require('../../../../config/db/index');
db.connect;
const login = require('../login');
 function creacturl (app){
  login.find({})
  .then(logins => {
    logins = logins.map(login => login.toObject())
   loginss = logins.map(function(item) {
    app.get(item.idusername, (req, res) => {
        res.send('Tạo  Link Thành Công' + item.idusername);
      })
   })
  })
}