<template>
  <div class="container">
    <h1 class="title">first robotic</h1>
    <div class="description">
      <p>
        La competencia FIRST (For Inspiration and Recognition of Science and Technology) Robotics Competition (FRC) es un evento anual de robótica a nivel internacional, diseñado para inspirar a los jóvenes a interesarse en la ciencia, la tecnología, la ingeniería y las matemáticas (STEM). Aquí hay una descripción detallada de la competencia:

        Descripción de la Competencia FIRST Robotics
        Objetivo:
        La competencia tiene como objetivo motivar a los estudiantes de secundaria a desarrollar habilidades en STEM a través de la construcción y programación de robots. Los equipos compiten en desafíos específicos cada año, que requieren la aplicación de principios de ingeniería y creatividad para resolver problemas.
      </p>
    </div>
    <div class="team">team: 8291</div>
    <div class="image-container">
      <img
        aria-hidden="true"
        alt="img"
        :src="require('@/assets/robot.jpg')"
        class="image"
      />
      <br>
      <a href="https://github.com/FRCTeam8291/ROBOT-----">repositorio</a>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "RoboticComponent",
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background-color: var(--background);
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
  text-align: center;
}

.description {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  background-color: var(--card);
  text-align: center;
  flex-grow: 1;
}

.team {
  font-size: 1.125rem;
  color: var(--muted-foreground);
  text-align: center;
  margin: 1rem 0;
}

.image-container {
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.image {
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  height: 50%;
}

.repository {
  margin: 1rem 0;
  text-align: center;
}

.repository a {
  color: var(--primary);
  text-decoration: underline;
}

:root {
  --background: #ffffff;
  --foreground: #1e1e1e;
  --card: #ffffff;
  --card-foreground: #1e1e1e;
  --popover: #ffffff;
  --popover-foreground: #1e1e1e;
  --primary: #333333;
  --primary-foreground: #f8f8f8;
  --secondary: #f2f2f2;
  --secondary-foreground: #333333;
  --muted: #f2f2f2;
  --muted-foreground: #777777;
  --accent: #f2f2f2;
  --accent-foreground: #333333;
  --destructive: #d9534f;
  --destructive-foreground: #ffffff;
  --border: #cccccc;
  --input: #cccccc;
  --ring: #333333;
  --radius: 0.5rem;
}
.dark {
  --background: #1e1e1e;
  --foreground: #f8f8f8;
  --card: #1e1e1e;
  --card-foreground: #f8f8f8;
  --popover: #1e1e1e;
  --popover-foreground: #f8f8f8;
  --primary: #f8f8f8;
  --primary-foreground: #333333;
  --secondary: #2c2c2c;
  --secondary-foreground: #f8f8f8;
  --muted: #2c2c2c;
  --muted-foreground: #b3b3b3;
  --accent: #2c2c2c;
  --accent-foreground: #f8f8f8;
  --destructive: #d9534f;
  --destructive-foreground: #ffffff;
  --border: #2c2c2c;
  --input: #2c2c2c;
  --ring: #e6e6e6;
}
</style>
