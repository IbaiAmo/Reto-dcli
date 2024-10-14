const menuBtn = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('menu-close');
const menu = document.querySelector('.links');
const fondo = document.querySelector('.fondoNegro');
const body = document.querySelector('body');

menuBtn.addEventListener('click', function() {
  menu.classList.add('active');
  fondo.style.display = "block";
  body.style.overflowY = "hidden";
});

closeBtn.addEventListener('click', function() {
  menu.classList.remove('active');
  fondo.style.display = "none";
  body.style.overflowY = "auto";
});