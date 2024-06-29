<template>
    <div>
      <ImgC imgUrl="https://media.istockphoto.com/id/474001632/es/foto/hombre-de-negocios-siluetas-de-avatar-predeterminado-o-imagen-de-perfil.jpg?s=2048x2048&w=is&k=20&c=HokdxB9yrC7Nvh9ZHZDUcHEUv4P_Y_f-DfT6DtwRKA4=" />
      <TypingEffect text="adrian Rodriguez Ortiz" :pauseTime="60000" :eraseAfterTyping="false"></TypingEffect>
      <br>
  
      <TypingEffect :lang="currentLanguage" text="Estudiante de sistemas apasionado por el aprendizaje y los retos. Participa activamente en diferentes concursos académicos, siempre buscando nuevas oportunidades para aplicar sus conocimientos y habilidades. Está comprometido con su desarrollo profesional y académico, y se encuentra en la recta final de su carrera universitaria, ansioso por enfrentar nuevos desafíos y contribuir significativamente en el campo de la tecnología." :eraseAfterTyping="false" :typingSpeed="20"></TypingEffect>
  
      <hr>
      <ChangeLang></ChangeLang>
      <PruebaEfecto backgroundColor="lightblue" direction="left">
        <SeccionUno />
      </PruebaEfecto>
    </div>
  </template>
  
  <script>
  import SeccionUno from '@/components/Inicio/SeccionUno';
  import PruebaEfecto from '@/components/Inicio/EfectoAparecer';
  import TypingEffect from '@/components/Inicio/TypingEffect';
  import ImgC from '@/components/Inicio/ImgC';
  import ChangeLang from '@/components/ChangeLang';
  import { useStore } from 'vuex';
  import { ref, watch } from 'vue';
  
  export default {
    components: {
      SeccionUno,
      PruebaEfecto,
      TypingEffect,
      ImgC,
      ChangeLang
    },
    setup() {
      const store = useStore();
      const currentLanguage = ref(store.state.language);
  
      // Watch para actualizar currentLanguage cuando cambie el estado de Vuex
      watch(
        () => store.state.language,
        (newLang) => {
          currentLanguage.value = newLang;
        }
      );
  
      return {
        currentLanguage
      };
    }
  };
  </script>
  
  <style>
  /* Estilos adicionales si son necesarios */
  </style>
  