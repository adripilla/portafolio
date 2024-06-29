<template>
    <div class="container" ref="containerRef">
      <div class="column" style="width: 25%;">Columna 1</div>
      <div class="column" style="width: calc(50% - 1rem);">Columna 2</div>
      <div class="column" style="width: 25%;">Columna 3</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SeccionUno',
    data() {
      return {
        scrollClass: ''
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const containerTop = this.$refs.containerRef.getBoundingClientRect().top;
        if (containerTop < 0) {
          this.scrollClass = 'scroll-effect'; // Aplica la clase de efecto al hacer scroll
        } else {
          this.scrollClass = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh; /* Alto del viewport */
    width: 100%; /* Ancho completo */
    margin: 0; /* Sin margen */
    padding: 0; /* Sin relleno */
    transition: background-color 0.3s ease; /* Transición suave del color de fondo */
    background-color: white; /* Color de fondo inicial */
  }
  
  .column {
    display: inline-block;
    height: 100%; /* Ocupa 100% de la altura del contenedor */
    padding: 1rem; /* Espacio interno para separar los divs */
    box-sizing: border-box; /* Incluir padding en el ancho total */
    text-align: center; /* Centrar el contenido */
  }
  
  .scroll-effect {
    background-color: #f0f0f0; /* Color de fondo al hacer scroll */
  }
  </style>
  