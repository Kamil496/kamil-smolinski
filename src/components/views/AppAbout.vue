<template>
  <div id="about" class="section about">
    <h2>About Me</h2>
  </div>
</template>

<script>
export default {
  name: 'AppAbout',
};
</script>

<style scoped>
.section {
  height: 100vh; /* Fills the viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about {
  background-color: #f0f0f0;
  color: #333;
}
</style>
