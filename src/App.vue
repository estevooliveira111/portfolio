<script setup>

import Home from './components/HomeApp.vue'
import Ability from "./components/Ability.vue";
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import ButtonWhatsapp from './components/ButtonWhatsapp.vue'

import MenuApp from "./components/Menu.vue";
import FooterApp from "./components/Footer.vue";

</script>

<template>

  <MenuApp />

  <main>

    <Home anchor="home"/>

    <Ability anchor="habilidades"/>

    <Projects anchor="projetos"/>

    <Experience anchor="experiencia"/>

  </main>

  <ButtonWhatsapp/>
  <FooterApp/>

</template>