
function ql(key) { 
   var ql = document.querySelector(key); 
    return ql
}  
ql('.hello').onclick  = function() {
    var s =  ql(".input").value;
    console.log(s);
}
