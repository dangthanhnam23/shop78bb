function tools () {

function onclick(classx , functions) {
  document.querySelector(classx).onclick = functions; 
}
function ql(classx) {
    let x = document.querySelector(classx) ;
     return x ;
    
}
function innerHTMLs ( classx , content) {
    document.querySelector(classx).innerHTML = content; 
}
}
module.exports = tools(); 
