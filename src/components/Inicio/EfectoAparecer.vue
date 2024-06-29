<template>
  <div class="animated-component" :class="{ 'is-animated': isIntersecting }">
    <!-- Contenido del componente animado -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PruebaEfecto',
  data() {
    return {
      isIntersecting: false, // Estado inicial de intersección
      observer: null // Variable para almacenar la instancia de IntersectionObserver
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(this.callback, { threshold: 0.5 });
    this.observer.observe(this.$el);
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.unobserve(this.$el);
    }
  },
  methods: {
    callback(entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
          this.isIntersecting = true;
          // this.observer.unobserve(entry.target); // Opcional: dejar de observar después de animar
        } else {
          this.isIntersecting = false;
        }
      });
    }
  }
};
</script>

<style scoped>
.animated-component {
  /* Estilos base del componente */
  transition: opacity 1.0s ease; /* Transición suave de opacidad */
  opacity: 0; /* Inicialmente oculto */
}

.is-animated {
  /* Estilos cuando el componente es visible */
  opacity: 1;
}
</style>
