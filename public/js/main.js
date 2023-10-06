// Importa la biblioteca anime.js en tu archivo main.js
// Si utilizas un paquete npm, puedes importarlo como un módulo
// import anime from 'animejs';

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el elemento del título
    const title = document.querySelector('h1');
  
    // Define una animación con anime.js
    anime({
      targets: title,
      scale: [1, 1.1], // Cambio de escala desde 1 hasta 1.1
      duration: 1000, // Duración de la animación en milisegundos
      direction: 'alternate', // Hace que la animación se revierta al final
      loop: true, // Hace que la animación se repita indefinidamente
      easing: 'easeInOutQuad' // Función de temporización para suavizar la animación
    });
  });
  