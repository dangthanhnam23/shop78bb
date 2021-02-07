const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const login = new Schema({
  gioitinh : {type : String, },
    FirstName : {type : String, },
    LastName : {type : String, },
    Username : {type : String , },
    avatar : {type: String}, 
    Email : {type : String ,},
    address : {type : String ,},
    phonenumber:  {type : String ,},
    datebirthday: {type : String ,},
    datebirthmonth: {type : String ,},
    datebirthyear: {type : String ,},
    Password : {type : String , },
    Rank : {type : String , },
    cookie: {type: String},
    ifcookie : {type:Array , } , 
    img: {type: String},
    dathemvaokho : {type: Array},
    dangchopheduyet :  {type:Array} , 
    monhangchuagiao: {type : Array}, 
    monhangdagiao:{type: Array} , 
    khachhangchoduyet : {type: Array},
    dangsanpham : {type: Array},
    danhsachchuagiao: {type : Array},
    danhsachdagiao: {type:Array}
  });
  module.exports = mongoose.model('login', login);