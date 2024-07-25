<template>
    <div class="slider">
      <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(image, index) in images" :key="index" :src="require(`@/assets/${image}`)" alt="Imagen del slider" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'img1.jpg',
          'img2.jpg',
          'img4.jpg',
          // Añade más imágenes aquí
        ],
        currentIndex: 0,
      };
    },
    mounted() {
      this.startSlider();
    },
    methods: {
      startSlider() {
        setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }, 2000); // Cambia la imagen cada 2 segundos
      }
    }
  };
  </script>
  
  <style scoped>
  .slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 600px; /* Ajusta el tamaño máximo según tus necesidades */
    margin: auto;
    height: 50vh;
  }
  
  .slides {
    display: flex;
    transition: transform 1s ease-in-out;
    height: 100%; /* Asegura que las imágenes cubran la altura del contenedor */
  }
  
  .slides img {
    width: 100%;
    height: 100%; /* Asegura que las imágenes cubran la altura del contenedor */
    object-fit: cover; /* Asegura que las imágenes cubran el contenedor sin distorsionarse */
    flex-shrink: 0;
  }
  </style>
  