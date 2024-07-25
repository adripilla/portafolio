<template>
  <div :class="['proyecto-card', { 'expanded-card': showInfo }]">
    <div class="bg-cover" :style="'background-image: url(' + imgUrl + ');'" aria-label="imagen de fondo"></div>
    <div class="border-t">
      <h2 class="text-lg font-semibold">{{ name }}</h2>
      <p class="text-muted-foreground">{{ language }}</p>
      <div class="mt-4 flex justify-end space-x-2">
        <button @click="toggleInfo" class="bg-secondary text-secondary-foreground hover-bg-secondary-80 px-4 py-2 rounded-full">info</button>
        <a v-if="bandera" :href="link" class="bg-primary text-primary-foreground hover-bg-primary-80 px-4 py-2 rounded-full">ver</a>
      </div>
      <div v-if="showInfo" class="info-content mt-4">
        <p>Año: {{ año }}</p>
        <p>{{ info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProyectoCard',
  props: {
    name: {
      type: String,
      default: 'Nombre del Proyecto'
    },
    language: {
      type: String,
      default: 'Idioma'
    },
    imgUrl: {
      type: String,
      default: 'https://th.bing.com/th/id/OIP.05b5BHN45Y0ljD4nIDxD8AAAAA?w=305&h=180&c=7&r=0&o=5&pid=1.7'
    },
    bandera: {
      type: Boolean,
      default: false
    },
    info: {
      type: String,
      default: 'Información'
    },
    año: {
      type: Number,
      default: 2024
    },
    link: {
      type: String,
      default: '#'
    }
  },
  data() {
    return {
      showInfo: false
    };
  },
  methods: {
    toggleInfo() {
      this.showInfo = !this.showInfo;
    }
  }
};
</script>

<style scoped>
/* Estilos personalizados */
.proyecto-card {
  background-color: var(--card-background-color, #ffffff);
  color: var(--card-text-color, #333333);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 0 0 3%;
  height: 50vh;
  width: 100%;
  transition: height 0.3s ease;
}

.expanded-card {
  height: 70vh;
}

.bg-cover {
  background-size: cover;
  background-position: center;
  height: 70%;
  font-size: 0;
}

.border-t {
  border-top-width: 3%;
  border-color: var(--card-border-color, #dddddd);
  height: 30%;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.font-semibold {
  font-weight: 600;
}

.text-muted-foreground {
  color: var(--text-muted-color, #777777);
}

.text-secondary-foreground {
  color: var(--text-secondary-color, #444444);
}

.text-primary-foreground {
  color: var(--text-primary-color, #ffffff);
}

.bg-secondary {
  background-color: var(--secondary-color, #f3f4f6);
}

.bg-primary {
  background-color: var(--primary-color, #4a90e2);
}

.hover-bg-secondary-80:hover {
  background-color: rgba(243, 244, 246, 0.8);
}

.hover-bg-primary-80:hover {
  background-color: rgba(74, 144, 226, 0.8);
}

.rounded-full {
  border-radius: 9999px;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.mt-4 {
  margin-top: 1rem;
}

.flex {
  display: flex;
}

.justify-end {
  justify-content: flex-end;
}

.space-x-2 > * {
  margin-right: 0.5rem;
}

.info-content {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>
