const mongoose = require('mongoose')  
async function connect() {
  try{
    await mongoose.connect('mongodb+srv://hoa:TRCYMxR5pVvqa3oN@cluster0.iiu6b.mongodb.net/shop?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log("connect succecessfully")
  }catch(error){

    console.log("connect thatbai");
  }

}
module.exports = connect; 
