<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <ChangeLang></ChangeLang>
    <ImgC
      imgUrl="https://media.istockphoto.com/id/474001632/es/foto/hombre-de-negocios-siluetas-de-avatar-predeterminado-o-imagen-de-perfil.jpg?s=2048x2048&w=is&k=20&c=HokdxB9yrC7Nvh9ZHZDUcHEUv4P_Y_f-DfT6DtwRKA4="
    />

    <div class="container mx-auto my-4">
      <TypingEffect
        class="text-center mx-auto w-1/2 bg-gray-300 p-4"
        text="adrian Rodriguez Ortiz"
        :pauseTime="60000"
        :eraseAfterTyping="false"
      ></TypingEffect>
    </div>

    <br />

    <TypingEffect
      :lang="currentLanguage"
      text="Estudiante de sistemas apasionado por el aprendizaje y los retos. Participa activamente en diferentes concursos académicos, siempre buscando nuevas oportunidades para aplicar sus conocimientos y habilidades. Está comprometido con su desarrollo profesional y académico, y se encuentra en la recta final de su carrera universitaria, ansioso por enfrentar nuevos desafíos y contribuir significativamente en el campo de la tecnología."
      :eraseAfterTyping="false"
      :typingSpeed="20"
    ></TypingEffect>

    <br /><br /><br /><br /><br />
    <div class="inline-flex-container tamaño">
      <a
        href="https://github.com/tu-usuario"
        target="_blank"
        class="no-underline btn"
      >
        <button
          class="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark"
        >
          Github
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/tu-usuario"
        target="_blank"
        class="no-underline btn"
      >
        <button
          class="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark"
        >
          Linkedin
        </button>
      </a>
      <a
        href="mailto:tu-email@gmail.com"
        target="_blank"
        class="no-underline btn"
      >
        <button
          class="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark"
        >
          Gmail
        </button>
      </a>
      <ResumenCv ref="alertMessage" class="btn" />
    </div>

    <hr class="my-4 w-full" />
    <SliderImg/>

    <br /><br /><br /><br /><br />
    <div class="inline-flex-container" style="width: 100%">
      <ProyectoCard
        class="proy"
        :bandera="true"
        name="intelltrip"
        language="- python - js -html"
        imgUrl="https://th.bing.com/th/id/OIP.Huqgn2ja6IvzyHbDdGyGrwHaEK?w=294&h=180&c=7&r=0&o=5&pid=1.7"
        info="proyecto con IA la cual te aconseja lugares o paises segun tus necesidades, realizado para hackmty (nota: tongo12345 cuenta secundaria)"
        año="2023"
        link="https://github.com/gRamos02/3-G"
      />

      <ProyectoCard
        class="proy"
        :bandera="true"
        name="covid analitics"
        language="-python"
        imgUrl="https://th.bing.com/th/id/OIP.C4MNOE112ASPZVx0WR6rGAHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7"
        info="practica la cual realiza estadisticas en forma de grafica de datos relacionados con el covi en mexico obtenidos de la pagina del gobierno mexicano"
        año="2023"
        link="https://github.com/adripilla/projectCovid"
      />
    </div>

    <br /><br /><br /><br /><br /><br /><br /><br />
    <div class="inline-flex-container" style="width: 100%">
      <ProyectoCard
        class="proy"
        :bandera="true"
        name="mlb standing"
        language="-python"
        imgUrl="https://th.bing.com/th/id/OIP.pcZGBi4hJ3IrXig57pmyUgAAAA?w=298&h=167&c=7&r=0&o=5&pid=1.7"
        info="MLB Standings Scraper Este script en Python utiliza las bibliotecas requests, BeautifulSoup, pandas, y json para obtener las clasificaciones de la MLB desde la página web oficial y guardar los datos en un archivo JSON."
        año="2024"
        link="https://github.com/adripilla/mlbStanding"
      />

      <ProyectoCard
        class="proy"
        :bandera="true"
        name="front para tienda proyecto"
        language="- vue"
        imgUrl="https://th.bing.com/th/id/OIP.Ve8s2wOzcP0qpU37-wQKlAHaEK?w=319&h=180&c=7&r=0&o=5&pid=1.7"
        info="front para proyecto final de la materia fulstack"
        año="2024"
        link="https://github.com/adripilla/frontProyectoFullStack"
      />
    </div>

    <br /><br /><br /><br /><br /><br /><br /><br />
    <DivInv>
      <div class="inline-flex-container" style="width: 100%">
        <ProyectoCard
          class="proy"
          :bandera="true"
          name="backend para tienda proyecto"
          language="- js -express"
          imgUrl="https://th.bing.com/th/id/OIP.d3YbqsJdACasB_SL-MHgIgHaFj?w=231&h=180&c=7&r=0&o=5&pid=1.7"
          info="backend para proyecto final de la materia fulstack"
          año="2024"
          link="https://github.com/adripilla/backProyectoFullStack"
        />

        <ProyectoCard
          class="proy"
          :bandera="true"
          name="apiWhatsapp"
          language="-JS  -css -handlebars"
          imgUrl="https://th.bing.com/th/id/OIP.Hr2wYW7ih6_HY2WkvHuoRAHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7"
          info="Es una pequeña api realizada con glitch y los servicios de twilio para gurdar datos en una BD desde whatsapp"
          año="2024"
          link="https://github.com/adripilla/apiWhatsapp"
        />
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br />
      <div class="inline-flex-container" style="width: 100%">
        <ProyectoCard
          class="proy"
          :bandera="true"
          name="notas Personales"
          language="-JS  -css -html"
          imgUrl="https://th.bing.com/th/id/OIP.SgBy5pmiLQHM-ngs1k0OTgHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7"
          info="pagina web la cual muestra notas previamente guardadas desde whatsapp "
          año="2024"
          link="https://adripilla-notas.netlify.app/"
        />

        <ProyectoCard
          class="proy"
          :bandera="true"
          name="deteccionPrueba"
          language="-JS  -css -html"
          imgUrl="https://th.bing.com/th/id/OIP.Oe2LDhoGC2Lljte8NkPcCQHaHB?w=168&h=180&c=7&r=0&o=5&pid=1.7"
          info="Pequeña prueba de reconocimiento para un futuro proyecto con tensorflow"
          año="2024"
          link="https://github.com/adripilla/PruebaDeteccion"
        />
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br />
      <div class="inline-flex-container" style="width: 100%">
        <ProyectoCard
          class="proy"
          :bandera="true"
          name="ticket nba"
          language="- php -js -html -css"
          imgUrl="https://ticketappprograweb.000webhostapp.com/images/background_image.jpg"
          info="pagian de venta de boletos para nba"
          año="2024"
          link="https://ticketappprograweb.000webhostapp.com/"
        />

        <ProyectoCard
          class="proy"
          :bandera="true"
          name="portafolio"
          language="- vue -js -html -css"
          imgUrl="data:image/jpeg;base64,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"
          info="portafolio web"
          año="2024"
        />
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br />
      <div class="inline-flex-container" style="width: 100%">
        <ProyectoCard
          class="proy"
          :bandera="true"
          name="ios"
          language="- swift - swiftUI -objectiveC"
          imgUrl="https://th.bing.com/th/id/OIP.aIuGzN9GhtBpejBYOW7ptQHaEK?w=285&h=180&c=7&r=0&o=5&pid=1.7"
          info="repositorio con varios proyectos echos en clase"
          año="2024"
          link="https://github.com/adripilla/IOS"
        />

        <ProyectoCard
          class="proy"
          :bandera="true"
          name="blackjack"
          language="-java"
          imgUrl="data:image/jpeg;base64,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"
          info="Juego de 1-4 jugadores para el tipico juego de blackjack/21"
          año="2022"
          link="https://github.com/adripilla/blackjack"
        />
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br />
      <div class="inline-flex-container" style="width: 100%">
        <ProyectoCard
          class="proy"
          :bandera="true"
          name="robot frc"
          language="- java"
          imgUrl="https://th.bing.com/th/id/OIP.v643NKzP3Da3CMD7Ov27sAHaE7?w=266&h=180&c=7&r=0&o=5&pid=1.7"
          info="proyecto realizado para el concurso FIRST por parte de la preparatoria Bateil"
          año="2020"
          link="https://github.com/FRCTeam8291/ROBOT"
        />

        <ProyectoCard
          class="proy"
          :bandera="true"
          name="school"
          language="- java -c++"
          imgUrl="data:image/jpeg;base64,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"
          info="repositorio con distintos proyectos escolares"
          año="2022"
          link="https://github.com/adripilla/school"
        />
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </DivInv>

    <br /><br /><br /><br /><br />
    

    <PruebaEfecto backgroundColor="lightblue" direction="left" class="w-full">
      <RoboticComponent></RoboticComponent>
    </PruebaEfecto>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <PruebaEfecto backgroundColor="lightblue" direction="left" class="w-full">
      <SeccionUno />
    </PruebaEfecto>
  </div>
</template>

<script>
import SeccionUno from "@/components/Inicio/SeccionUno";
import PruebaEfecto from "@/components/Inicio/EfectoAparecer";
import TypingEffect from "@/components/Inicio/TypingEffect";
import ImgC from "@/components/Inicio/ImgC";
import ResumenCv from "@/components/Inicio/CV";
import ProyectoCard from "@/components/Inicio/ProyectoCard";
import RoboticComponent from "@/components/Inicio/FirstComp.vue";
import DivInv from "@/components/Inicio/DivInv.vue";
import SliderImg from "@/components/Inicio/SliderImg.vue";

import ChangeLang from "@/components/ChangeLang";
import { useStore } from "vuex";
import { ref, watch } from "vue";

export default {
  components: {
    SeccionUno,
    PruebaEfecto,
    TypingEffect,
    ImgC,
    ChangeLang,
    ResumenCv,
    ProyectoCard,
    RoboticComponent,
    DivInv,
    SliderImg
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
      currentLanguage,
    };
  },
};
</script>

<style scoped>
/* Estilos adicionales si son necesarios */

.tamaño {
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

.proy {
  margin-right: 8%;
  margin-left: 8%;
}

.btn {
  width: 20%;
  z-index: 1;
}
</style>
