let mountain = document.getElementById('mountain');
let planet = document.getElementById('planet');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let background = document.getElementById('background');

window.addEventListener("scroll", function(){
   let value = window.scrollY;
   mountain.style.top = value * 0.25 + 'px';
   planet.style.top =  value * 0.5 + 'px';
   text.style.marginTop =  value + 'px';
   btn.style.marginTop =  value  + 'px';
   background.style.top =  value * 0.4 + 'px';
});


const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body")

burger.addEventListener("click", function(){
   burger.classList.toggle("active");
   nav.classList.toggle('active');
   body.classList.toggle("lock")
});

nav.addEventListener("click", function(){
   burger.classList.remove("active");
   nav.classList.remove('active');
   body.classList.remove("lock")
});
