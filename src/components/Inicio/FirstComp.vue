<template>
    <div class="container" ref="containerRef">
      <div
        class="column c1"
        :class="{ 'scroll-effect': scrollClass, 'polygon-effect': isPolygon[0] }"
        :style="getColumnStyle(0)"
        @click="togglePolygon(0)"
      >
        <img :src="require('@/assets/certificado2.png')" alt="Certificado 1" />
        <p>
          La Copa de Comunidades de Programación es un emocionante concurso que
          reúne a talentosos programadores de Perú, México y Colombia. Este evento
          destaca por su enfoque en la colaboración, la creatividad y la
          resolución de problemas mediante la programación. Durante la
          competencia, los participantes forman equipos representando a sus
          respectivas comunidades y se enfrentan en desafíos que ponen a prueba
          sus habilidades técnicas y estratégicas.
        </p>
      </div>
      <div
        class="column c2"
        :class="{ 'scroll-effect': scrollClass, 'polygon-effect': isPolygon[1] }"
        :style="getColumnStyle(1)"
        @click="togglePolygon(1)"
      >
        <img :src="require('@/assets/certificado1.png')" alt="Certificado 1" />
        <p>
          El International Collegiate Programming Contest (ICPC) es una
          competencia de programación globalmente reconocida para estudiantes
          universitarios. <br />Objetivo: El ICPC busca promover la colaboración,
          la creatividad y la capacidad de resolver problemas entre los
          estudiantes universitarios. <br />Los participantes deben resolver
          problemas algorítmicos complejos bajo presión. <br />Formato del
          Concurso: <br />Equipos: Cada equipo está compuesto por tres estudiantes
          que representan a su universidad. <br />Rondas: El concurso se
          desarrolla en varias rondas, incluyendo competencias locales, regionales
          y una final mundial. <br />Problemas: Los problemas presentados
          requieren habilidades en algoritmos y estructuras de datos. Los equipos
          deben escribir soluciones correctas y eficientes en un tiempo limitado.
        </p>
      </div>
      <div
        class="column c3"
        :class="{ 'scroll-effect': scrollClass, 'polygon-effect': isPolygon[2] }"
        :style="getColumnStyle(2)"
        @click="togglePolygon(2)"
      >
        <img :src="require('@/assets/certificado3.png')" alt="Certificado 1" />
        <p>
          La Universidad Autónoma de la Ciudad (UAC) se complació en invitar a
          diversas escuelas a participar en su emocionante Concurso Regional de
          Programación, como parte de la Semana Académica. Este evento representó
          una oportunidad única para estudiantes de toda la región de demostrar
          sus habilidades en programación y resolver desafíos técnicos de manera
          innovadora.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SeccionUno",
    data() {
      return {
        scrollClass: "",
        isPolygon: [false, false, false], // Estado para cada columna
        activeIndex: -1, // Índice de la columna activa
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const containerTop = this.$refs.containerRef.getBoundingClientRect().top;
        if (containerTop < 0) {
          this.scrollClass = "scroll-effect";
        } else {
          this.scrollClass = "";
        }
      },
      togglePolygon(index) {
        // Alternar el estado de polígono solo para la columna seleccionada
        this.isPolygon = this.isPolygon.map((_, i) =>
          i === index ? !this.isPolygon[i] : false
        );
  
        // Alternar el índice activo
        this.activeIndex = this.isPolygon[index] ? index : -1;
      },
      getColumnStyle(index) {
        if (this.activeIndex === -1) {
          // Estado inicial
          return index === 1 ? "width: calc(50% - 1rem);" : "width: 25%;";
        } else if (this.activeIndex === index) {
          // Columna activa
          return "width: calc(80% - 1rem);";
        } else {
          // Columnas inactivas
          return "width: 10%;";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s ease;
    background-color: white;
  }
  
  .column {
    display: inline-block;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    text-align: center;
    transition: clip-path 0.3s ease, width 0.3s ease; /* Transición suave para clip-path y ancho */
    cursor: pointer;
    font-size: 0px;
    border: solid 1px black;
  }
  
  .scroll-effect {
    background-color: #f0f0f0;
  }
  
  .polygon-effect {
    clip-path: polygon(30% 0%, 0% 100%, 75% 100%, 100% 0%);
    font-size: 1rem;
    background-color: #cccccc
  }
  
  
  .column img {
    width: 80%;
    height: 40%;
  }
  
  .polygon-effect img {
    width: 45% !important;
  }
  
  .polygon-effect p {
    padding-left: 25%;
    padding-right: 25%;
  }
  </style>
  