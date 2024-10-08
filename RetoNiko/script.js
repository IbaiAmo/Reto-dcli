const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');

let currentImageIndex = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % sliderItems.length;

  // Mueve la imagen actual a la posición inicial
  sliderItems[currentImageIndex].style.transform = 'translateX(0)';

  // Mueve la imagen anterior hacia la izquierda (fuera del contenedor)
  const previousImageIndex = (currentImageIndex - 1 + sliderItems.length) % sliderItems.length;
  sliderItems[previousImageIndex].style.transform = 'translateX(-100%)';
}

setInterval(nextImage, 3000); // Cambia de imagen cada 3 segundos