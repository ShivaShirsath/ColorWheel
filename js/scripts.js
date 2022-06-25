var ele = document.getElementById("wheel");
var selector = document.getElementById("selector");
var p = document.getElementById("pt");

var mx = ele.offsetWidth / 2;
var my = ele.offsetWidth / 2;

ele.addEventListener("touchstart", clicked);
ele.addEventListener("touchmove", clicked);

function clicked(e) {
  var br = ele.getBoundingClientRect();
  // x & y are relative to the clicked element
  var x = e.touches[0].clientX - br.left;
  var y = e.touches[0].clientY - br.top;
  pt.style.left="calc(" + x +"px - 2.5vmin)";
  pt.style .top="calc(" + y +"px - 2.5vmin)";
  
  if(x<mx && y<my) {
    selector.style.transform = "rotate(-60deg) translate(47.5vmin)";
  }
  if(x<mx && y>my) {
    selector.style.transform = "rotate(-120deg) translate(47.5vmin)";
  }
  if(x>mx && y>my) {
    selector.style.transform = "rotate(120deg) translate(47.5vmin)";
  }
  if(x>mx && y<my) {
    selector.style.transform = "rotate(60deg) translate(47.5vmin)";
  }
  
  if(x < mx +25 && x > mx -25 && y < my){
    selector.style.transform = "rotate(0deg) translate(47.5vmin)";
  }
  if(x < mx +25 && x > mx -25 && y > my){
    selector.style.transform = "rotate(180deg) translate(47.5vmin)";
  }
  
  if(x < mx && y < my +25 && y > my -25){
    selector.style.transform = "rotate(270deg) translate(47.5vmin)";
  }
  
  if(x > mx && y < my +25 && y > my -25){
    selector.style.transform = "rotate(90deg) translate(47.5vmin)";
  }
}
