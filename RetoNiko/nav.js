document.getElementById('menu-toggle').addEventListener('click', function () {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('active'); // Alternar la clase 'active'
});

const sliderItems = document.querySelectorAll('.slider-item');
const sliderContainer = document.querySelector('.slider-container');

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

let currentImageIndex = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % sliderContainer.children.length;

  // Animación de deslizamiento
  const currentImage = sliderContainer.children[currentImageIndex];
  currentImage.classList.add('slide-in'); // Añade la clase slide-in a la imagen actual

  setTimeout(() => {
    // Elimina la clase slide-in y añade la clase slide-out
    currentImage.classList.remove('slide-in');
    currentImage.classList.add('slide-out');

    // Espera un poco para que la animación se complete
    setTimeout(() => {
      // Elimina la clase slide-out y mueve la imagen al final del contenedor
      currentImage.classList.remove('slide-out');
      sliderContainer.appendChild(currentImage); 
    }, 500); // Espera 0.5 segundos (la duración de la transición)
  }, 500); // Espera 0.5 segundos para iniciar la animación
}

// Inicia el carrusel
setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos