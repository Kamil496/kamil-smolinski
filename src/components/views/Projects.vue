<template>
  <div id="projects" class="portfolio">
    <div class="master_section">
      <h2>Projects</h2>
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
  name: 'AppProjects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Postident',
          description: 'dummy text',
          tools: 'Vue.js, HTML, CSS',
        },
        {
          id: 2,
          title: 'Post und Paket 24/7',
          description: 'dummy text',
          tools: 'React, JavaScript, Tailwind CSS',
        },
        // Add more projects as needed
      ]
    };
  }
};
</script>

<style scoped>
@import url('../../css/components/ProjectsStyle.css');
</style>
