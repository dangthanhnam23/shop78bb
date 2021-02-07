const sanpham  = require('../controllers/models/course')
class NewController {
    index(req , res , next) {
        sanpham.find({})
        .then(sanphams => {
            sanphams = sanphams.map(sanpham => sanpham.toObject())
           res.render('product/index' , {sanphams});
        })
        .catch(next);
          
       }
    khohang(req , res) {
        res.render('product/khohang')
    }
    admin(req , res) {
        res.render('product/creact-product')
    }
    etionweb(req , res) {
        res.render('product/etionweb')
    }
    pheduyetadmin(req , res) {
        res.render('product/khoduyetadmin')
    }
}
module.exports = new NewController; 
