<template>
    <div>
      <button @click="openModal" class="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary-dark"> Resumen</button>
      <div v-if="showModal" id="modal" class="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center transition-opacity duration-300">
        <div class="bg-card p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 relative">
          <button @click="closeModal" class="absolute top-4 right-4 text-destructive-foreground hover:text-destructive">
            <img aria-hidden="true" alt="close-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✖" />
          </button>
          <div class="prose prose-lg text-foreground  fixed top-0 left-0 bg-black real">
            <h1>Adrian Rodriguez Ortiz</h1>
            <p>
              <a href="mailto:adripilla10322@gmail.com">adripilla10322@gmail.com</a> | <a href="tel:+52874186441">(+52) 874186441</a> |
              <a href="https://linkedin.com/in/adrian-rodriguez-ortiz-09a004280">linkedin.com/in/adrian-rodriguez-ortiz-09a004280</a> |
              <a href="https://github.com/adripilla">adripilla</a>
            </p>
            <h2>Projects</h2>
            <h3>Blackjack</h3>
            <p>A 21 game program, also known as blackjack, generally involves implementing a card game between a player and a dealer.</p>
            <ul>
              <li>Language: Java</li>
              <li>GitHub: <a href="https://github.com/adripilla/blackjack">adripilla/blackjack</a></li>
            </ul>
            <h3>COVID</h3>
            <p>Project which takes patient statistics from the Mexican government platform and through graphic analysis the results.</p>
            <ul>
              <li>GitHub: <a href="https://github.com/adripilla/projectCovid">adripilla/projectCovid</a></li>
            </ul>
            <h3>NBA Tickets</h3>
            <p>This project aims to develop a comprehensive system for the purchase of tickets for NBA (National Basketball Association) games.</p>
            <ul>
              <li>GitHub: <a href="https://github.com/adripilla/NBATickets">adripilla/NBATickets</a></li>
            </ul>
            <h3>Desarrollo de Robot</h3>
            <p>Programming a robot to solve the proposed problems in the competition involves creating code for both an autonomous phase and a manual phase.</p>
            <ul>
              <li>Associated with Bachillerato Técnico Industrial de La Laguna</li>
              <li>GitHub: <a href="https://github.com/FRCTeam8291/ROBOT">FRCTeam8291/ROBOT</a></li>
            </ul>
            <h3>IntelliTrip</h3>
            <p>AI based search engine for travel recommendations and generative descriptions.</p>
            <ul>
              <li>Associated with Instituto Tecnológico de La Laguna</li>
              <li>GitHub: <a href="https://github.com/gramos02/3-G">gramos02/3-G</a></li>
            </ul>
            <h2>Technologies</h2>
            <p>Languages: C++, Java, Objective-C, C#.NET, SQL, JavaScript, Swift</p>
            <p>Software: Visual Studio, Microsoft SQL Server, XCode, Git, Vue, Express, MongoDB</p>
            <p>Languages: Spanish(native), English(moderate)</p>
            <h2>Soft Skills and Extracurricular Activities</h2>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <h3>Extracurricular Activities:</h3>
                <ul>
                  <li>Programming contests</li>
                  <li>Soccer (football)</li>
                  <li>Reading</li>
                  <li>Hackathons</li>
                </ul>
              </div>
              <div>
                <h3>Soft Skills:</h3>
                <ul>
                  <li>Quick learner</li>
                  <li>Adaptable</li>
                  <li>Self-taught</li>
                  <li>Proactive</li>
                  <li>Disciplined</li>
                  <li>Thrive on challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
        setTimeout(() => {
          this.$el.querySelector('#modal').classList.remove('opacity-0');
        }, 10);
      },
      closeModal() {
        this.$el.querySelector('#modal').classList.add('opacity-0');
        setTimeout(() => {
          this.showModal = false;
        }, 300);
      }
    }
  };
  </script>
  
  <style scoped>
  #modal {
    opacity: 0;
  }
  #modal:not(.hidden) {
    opacity: 1;
  }

  .real{
    width: 1000%;
    z-index: 10;
  }
  </style>
  