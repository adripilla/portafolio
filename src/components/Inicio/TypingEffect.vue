<template>
    <div>
      <p>{{ displayedText }}</p>
    </div>
  </template>
  
  <script>
  import { ref, watch, onMounted, onUnmounted } from 'vue';
  import axios from 'axios';
  import { v4 as uuidv4 } from 'uuid';
  
  export default {
    name: "TypingEffect",
    props: {
      text: {
        type: String,
        required: true
      },
      typingSpeed: {
        type: Number,
        default: 100
      },
      pauseTime: {
        type: Number,
        default: 7000
      },
      lang: {
        type: String,
        default: "es"
      }
    },
    setup(props) {
      const displayedText = ref('');
      const currentIndex = ref(0);
      let timeout = null;
      let interval = null; // Variable para el intervalo
      const localText = ref(props.text); // Usar una variable local para almacenar el texto
  
      // Función para traducir texto usando la API de Microsoft Translator
      const translateText = async (text, targetLang) => {
        let key = '392aa215a0ba46a3ab9ebe06cee15c81'; // Tu clave de suscripción aquí
        let endpoint = 'https://api.cognitive.microsofttranslator.com/translate';
        let location = 'westus3'; // Puedes cambiarlo si tu recurso no es global
  
        let targetLanguage = targetLang === 'en' ? 'es' : 'en';
  
        try {
          const response = await axios.post(endpoint, [{ text }], {
            params: {
              'api-version': '3.0',
              to: targetLanguage
            },
            headers: {
              'Ocp-Apim-Subscription-Key': key,
              'Ocp-Apim-Subscription-Region': location,
              'Content-type': 'application/json',
              'X-ClientTraceId': uuidv4().toString()
            }
          });
  
          return response.data[0].translations[0].text;
        } catch (error) {
          console.error('Error al traducir:', error);
          return null;
        }
      };
  
      // Función para simular el efecto de escritura
      const typeText = async () => {
        if (currentIndex.value < localText.value.length) {
          displayedText.value = localText.value.slice(0, currentIndex.value + 1);
          currentIndex.value++;
          timeout = setTimeout(typeText, props.typingSpeed);
        } else {
          clearTimeout(timeout); // Detener el temporizador cuando se completa la escritura
        }
      };
  
      // Función para iniciar el efecto de escritura
      const startTyping = async () => {
        currentIndex.value = 0;
        displayedText.value = '';
        const translatedText = await translateText(props.text, props.lang);
        if (translatedText) {
          localText.value = translatedText;
          await typeText();
        }
      };
  
   
  
      // Ejecutar startTyping y logLang al montar el componente
      onMounted(() => {
        startTyping();
      });
  
      // Limpiar el temporizador y el intervalo cuando se desmonte el componente
      onUnmounted(() => {
        clearTimeout(timeout);
        clearInterval(interval);
      });
  
      // Observar el cambio de idioma en el store
      watch(
        () => props.lang,
        async () => {
          await startTyping();
        }
      );
  
      return {
        displayedText
      };
    }
  };
  </script>
  
  <style scoped>
  .sub-text-white {
    color: rgb(0, 0, 0);
    text-align: center;
    margin: 0;
    font-size: 1rem;
    text-align: center;
  }
  </style>
  