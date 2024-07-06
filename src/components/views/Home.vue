<!-- src/views/Home.vue -->

<template>
  <div class="home">
    <div class="section">
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page of my portfolio.</p>
      <p>Feel free to explore more using the navigation above!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHome',
};
</script>

<style scoped>
.home {
  height: 100vh; /* Höhe des gesamten Bildschirms nutzen */
  scroll-behavior: smooth; /* Sanftes Scrollen aktivieren */
  text-align: center;
}

.section {
  padding: 20px;
  height: 100%; /* Container-Höhe auf 100% setzen */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.section h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.section p {
  font-size: 1.2rem;
  line-height: 1.6;
}
</style>
