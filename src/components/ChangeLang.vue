<template>
  <v-container>
    <div class="btnLan">
      <p style="margin-right: 1%;">{{ currentLanguage }}</p>
      <v-btn color="primary" @click="toggleLanguage">language</v-btn>
    </div>
  </v-container>
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
.btnLan{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
