const menuBtn = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('menu-close');
const menu = document.querySelector('.links');
const fondo = document.querySelector('.fondoNegro');

menuBtn.addEventListener('click', function() {
  menu.classList.add('active');
  fondo.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  menu.classList.remove('active');
  fondo.style.display = "none";
});