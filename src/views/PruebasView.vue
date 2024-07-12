<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <ChangeLang></ChangeLang>
    <ImgC imgUrl="https://media.istockphoto.com/id/474001632/es/foto/hombre-de-negocios-siluetas-de-avatar-predeterminado-o-imagen-de-perfil.jpg?s=2048x2048&w=is&k=20&c=HokdxB9yrC7Nvh9ZHZDUcHEUv4P_Y_f-DfT6DtwRKA4=" />
    
    <div class="container mx-auto my-4">
      <TypingEffect class="text-center mx-auto w-1/2 bg-gray-300 p-4" text="adrian Rodriguez Ortiz" :pauseTime="60000" :eraseAfterTyping="false"></TypingEffect>
    </div>
    
    <br>
  
    <TypingEffect :lang="currentLanguage" text="Estudiante de sistemas apasionado por el aprendizaje y los retos. Participa activamente en diferentes concursos académicos, siempre buscando nuevas oportunidades para aplicar sus conocimientos y habilidades. Está comprometido con su desarrollo profesional y académico, y se encuentra en la recta final de su carrera universitaria, ansioso por enfrentar nuevos desafíos y contribuir significativamente en el campo de la tecnología." :eraseAfterTyping="false" :typingSpeed="20"></TypingEffect>
  

    <br><br><br><br><br>
    <div class="inline-flex-container tamaño">
      
      <a href="https://github.com/tu-usuario" target="_blank" class="no-underline btn">
      <button class="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark">Github</button>
    </a>
    <a href="https://www.linkedin.com/in/tu-usuario" target="_blank" class="no-underline btn">
      <button class="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark">Linkedin</button>
    </a>
    <a href="mailto:tu-email@gmail.com" target="_blank" class="no-underline btn">
      <button class="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark">Gmail</button>
    </a>
      <ResumenCv ref="alertMessage" class="btn "/>
    </div>
    
    <hr class="my-4 w-full">
    
    <br><br><br><br><br>
    <div class="inline-flex-container" style="width: 100%;">
        <ProyectoCard class="proy" :bandera="true" />
        <ProyectoCard class="proy"/>
        <ProyectoCard class="proy"/>
    </div>

    <br><br><br><br><br><br><br><br>
    <div class="inline-flex-container" style="width: 100%;">
        <ProyectoCard class="proy"/>
        <ProyectoCard class="proy"/>
        <ProyectoCard class="proy"/>
    </div>

    <br><br><br><br><br>
    <PruebaEfecto backgroundColor="lightblue" direction="left" class="w-full">
      <SeccionUno />
    </PruebaEfecto>
  </div>
</template>

<script>
import SeccionUno from '@/components/Inicio/SeccionUno';
import PruebaEfecto from '@/components/Inicio/EfectoAparecer';
import TypingEffect from '@/components/Inicio/TypingEffect';
import ImgC from '@/components/Inicio/ImgC';
import ResumenCv from '@/components/Inicio/CV';
import ProyectoCard from '@/components/Inicio/ProyectoCard';

import ChangeLang from '@/components/ChangeLang';
import { useStore } from 'vuex';
import { ref, watch } from 'vue';

export default {
  components: {
    SeccionUno,
    PruebaEfecto,
    TypingEffect,
    ImgC,
    ChangeLang,
    ResumenCv,
    ProyectoCard
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

<style scoped>
/* Estilos adicionales si son necesarios */

.tamaño{
  width: 20%;
  margin-left: 40%;
}
.inline-flex-container {
  display: inline-flex;
  align-items: center;
 
}

.inline-flex-container .btn {
  margin-right: 8%; /* Espacio entre los botones */
}

.proy{
  margin-right: 8%;
  margin-left: 8%;
}

.btn{
  width: 20%;
  z-index: 1;
}
</style>
