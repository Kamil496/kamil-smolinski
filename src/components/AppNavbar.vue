<template>
  <nav class="navbar">
    <div class="container">
      <a href="#home" class="navbar-logo">Kamil</a>
      <div class="navbar-links">
        <a href="#about" class="navbar-item">About</a>
        <a href="#projects" class="navbar-item">Projects</a>
        <a href="#contact" class="navbar-item">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
@import url('./../css/components/NavbarStyle.css');
</style>
