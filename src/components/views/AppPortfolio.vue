<!-- src/views/Portfolio.vue -->

<template>
  <div class="portfolio">
    <div class="section">
      <h2>Portfolio</h2>
      <div class="projects">
        <div v-for="project in projects" :key="project.id" class="project">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <p>Tools used: {{ project.tools }}</p>
          <!-- Optional: Add images, links, or additional details as needed -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPortfolio',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          tools: 'Vue.js, HTML, CSS',
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          tools: 'React, JavaScript, Tailwind CSS',
        },
        // Add more projects as needed
      ]
    };
  }
};
</script>

<style scoped>
.portfolio {
  background-color: #f8f9fa; /* Hintergrundfarbe */
  min-height: 100vh; /* Mindesthöhe des Bildschirms nutzen */
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.section {
  max-width: 800px; /* Maximale Breite des Inhalts */
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.project {
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.project h3 {
  margin-bottom: 10px;
  color: #007bff; /* Farbe für den Projekt-Titel */
}

.project p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333; /* Farbe für die Projekt-Beschreibung */
}
</style>
