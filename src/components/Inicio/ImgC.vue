<template>
  <div class="circular-image" @click="rotateImage">
    <img :src="imgUrl" alt="Circular Image" class="image" :style="{ transform: `rotateY(${rotation}deg)` }">
  </div>
</template>

<script>
export default {
  name: "ImgC",
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      rotation: 0
    };
  },
  methods: {
    rotateImage() {
      const rotateIncrement = 3600; // 10 vueltas * 360 grados por vuelta
      this.rotation += rotateIncrement;
    }
  }
};
</script>

<style scoped>
.circular-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.image {
  width: 150px; /* Ancho de la imagen */
  height: 150px; /* Altura de la imagen */
  border-radius: 50%; /* Forma circular */
  object-fit: cover; /* Ajuste de la imagen */
  transition: transform 0.5s ease; /* Transición suave para la rotación */
  cursor: pointer;
}
</style>
