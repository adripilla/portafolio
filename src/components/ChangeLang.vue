<template>
  <div>
    <p>{{ currentLanguage }}</p>
    <button @click="toggleLanguage">Toggle Language</button>
  </div>
</template>

<script>
export default {
  name: "ChangeLang",
  computed: {
    currentLanguage() {
      return this.$store.state.language;
    },
  },
  methods: {
    toggleLanguage() {
      const newLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
      this.$store.dispatch('changeLanguage', newLanguage);
    },
  },
};
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>
