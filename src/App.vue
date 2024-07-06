<template>
  <Navbar/>
  <router-view/>
  <Home msg="Welcome to Your Vue.js App"/>
  <About/>
  <Projects/>
  <Contact/>
</template>

<script>
import Navbar from './components/AppNavbar.vue';
import Home from './components/views/Home.vue'
import About from './components/views/AppAbout.vue';
import Projects from './components/views/AppPortfolio.vue';
import Contact from './components/views/AppContact.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
