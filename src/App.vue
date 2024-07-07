<template>
  <Navbar/>
  <Home msg="Welcome to Your Vue.js App"/>
  <About/>
  <Projects/>
  <Contact/>
</template>

<script>
import Navbar from './components/AppNavbar.vue';
import Home from './components/views/Home.vue'
import About from './components/views/AppAbout.vue';
import Projects from './components/views/Projects.vue';
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
@import url('./css/AppStyle.css');
</style>
