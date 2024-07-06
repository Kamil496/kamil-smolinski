<!-- src/components/Navbar.vue -->

<!--<template>-->
<!--  <nav class="navbar">-->
<!--    <div class="container">-->
<!--      <router-link to="/" class="navbar-logo">Portfolio</router-link>-->
<!--      <div class="navbar-links">-->
<!--        <router-link to="/about" class="navbar-item">About</router-link>-->
<!--        <router-link to="/portfolio" class="navbar-item">Portfolio</router-link>-->
<!--        <router-link to="/contact" class="navbar-item">Contact</router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->
<!--</template>-->

<template>
  <nav class="navbar">
    <div class="container">
      <a href="#home" class="navbar-logo">Portfolio</a>
      <div class="navbar-links">
        <a href="#about" class="navbar-item">About</a>
        <a href="#portfolio" class="navbar-item">Portfolio</a>
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
.navbar {
  position: fixed; /* Fixiere die Navbar */
  top: 0; /* Oben an der Seite positionieren */
  left: 0;
  right: 0;
  background-color: #1a1a1a; /* Dunkle Hintergrundfarbe der Navbar */
  color: white; /* Textfarbe der Navbar */
  width: 100%;
  padding: 10px 0;
  z-index: 1000; /* Z-Index sicherstellen, dass die Navbar über anderen Inhalten liegt */
  border-bottom: 1px solid #333; /* Untere Trennlinie */
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff; /* Farbe für das Logo */
  text-decoration: none;
}

.navbar-links {
  display: flex;
}

.navbar-item {
  color: #ffffff; /* Textfarbe der Navbar-Links */
  text-decoration: none; /* Keine Unterstreichung */
  margin-left: 20px;
  padding: 10px 15px;
  transition: color 0.3s ease; /* Übergangseffekt für Farbwechsel */
}

.navbar-item:hover {
  color: #007bff; /* Farbe bei Hover */
}
</style>
