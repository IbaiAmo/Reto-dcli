document.getElementById('menu-toggle').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active'); // Alternar la clase 'active'
});

const sliderItems = document.querySelectorAll('.slider-item');

sliderItems.forEach(item => {
  item.addEventListener('click', function (event) {
    // Obtén el atributo 'href' de la imagen
    const href = this.getAttribute('data-href');

    // Redirige al usuario a la URL
    if (href) {
      window.location.href = href;
    }
  });
});