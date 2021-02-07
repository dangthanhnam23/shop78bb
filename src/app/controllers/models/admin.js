const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sanpham78 = new Schema({
  nameproduct : {type:String}, 
  priceproduct : {type:String}, 
  amountproduct : {type:Number}, 
  content : {type:String}, 
  img: {type:Array},
  tag : {type:String} ,
  cmt: {type:Array}, 
  like : {type:Number}, 
  url : {type:String},
  xuathang: {type: String}, 
  avatarproduct:{type:String} , 
  avatarproducts:{type:Array} , 
  nguoidang:{type:String} , 
  } , {
    timestamps : true
  });
  module.exports = mongoose.model('admin', sanpham78  );