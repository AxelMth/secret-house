<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'ScoreBoard',
  setup() {
    const hostname = import.meta.env.PROD ? '192.168.1.36:3000' : 'localhost:3000';

    const scoreBoard = ref<Record<string, number>>({});
    
    fetch('http://' + hostname + '/scoreboard', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Allow-Control-Allow-Origin': '*',
      },
    })
      .then(response => response.json())
      .then(data => {
        scoreBoard.value = data;
      });

    // Function to generate a random gradient
    const getRandomGradient = () => {
      const color1 = `hsl(${Math.random() * 360}, 100%, 70%)`; // Random color 1
      const color2 = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color 2
      return `linear-gradient(135deg, ${color1}, ${color2})`; // Gradient direction
    };

    return {
      scoreBoard,
      getRandomGradient,
    };
  },
};
</script>

<template>
  <div>
    <h1 class="title">Score Board</h1>
    <div class="score-cards">
      <div
        v-for="(score, name) in scoreBoard"
        :key="name"
        class="score-card"
        :style="{ background: getRandomGradient() }"
      >
        <div class="score-card-content">
          <h2>{{ name }}</h2>
          <p>Score: {{ score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Center and style the title */
.title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

/* Score card container */
.score-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two cards per row */
  gap: 1rem;
  justify-content: center;
  margin: 0 2rem;
}

/* Score card styles */
.score-card {
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff; /* Default text color */
  position: relative;
}

/* Add overlay for text contrast */
.score-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3); /* Semi-transparent black overlay */
  border-radius: 10px;
}

/* Increase contrast on hover */
.score-card:hover {
  transform: scale(1.05);
}

/* Inner content */
.score-card-content {
  position: relative;
  z-index: 1;
}

.score-card-content h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.score-card-content p {
  margin-top: 8px;
  font-size: 1.2rem;
}
</style>