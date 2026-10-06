<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import AboutMe from './components/AboutMe.vue'
</script>

<template>
  <div class="app-layout">
    <NavBar />
    <main>
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </div>
</template>