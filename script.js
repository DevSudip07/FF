
// =========== Nav Bar ===========

var menu = document.querySelector(".nav ul");
var icon = document.querySelector("#toggle");
var body = document.querySelector("body")

var a = 0;
icon.addEventListener("click", ()=>{
  if(a == 0){
    icon.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    menu.style.top = "128px";
    a = 1;
  }else {
    icon.innerHTML = `<i class="fa-solid fa-chevron-down"></i>`;
    menu.style.top = "-150px";
    a = 0;
  }
});


// =========== Loader ===========

document.addEventListener("contextmenu", function(e){
    e.preventDefault()
}, false);


var loader = document.querySelector(".loader");

setTimeout(function load() {
  loader.style.display = "none";
}
, 2500);


// =========== Form ===========

var close = document.querySelector(".close");
var form = document.querySelector(".register");
var body = document.querySelector(".container");
var open = document.querySelector(".apply");
var playWithUs = document.querySelector("#playwithus");

var z = 0;

function register() {
  function formScroll() {
    if(z == 0){
      form.style.display = "none";
    }else {
      body.style.position = "fixed";
      z = 1
    }
  }
  open.addEventListener("click", ()=> {
    form.style.display = "flex";
    body.style.position = "fixed";
    z = 1;
  })
  close.addEventListener("click", ()=> {
    form.style.display = "none";
    body.style.position = "absolute";
    z = 0;
  })
  
  formScroll();
}

register();
