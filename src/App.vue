<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import { gameState } from '@/stores/gameState.js'
import { useRoute } from 'vue-router'
import axios from 'axios'
import CONSTANTS from '@/common/constants.js'
import router from '@/router/router.js'

const route = useRoute()


// var state = gameState()

const undo = async () => {
  console.log("Undo");
  await axios.get(CONSTANTS.endpoint + "/undo").catch((error) => {
    console.log(error);
  })
}

const redo = async () => {
  console.log("Redo");
  await axios.get(CONSTANTS.endpoint + "/redo").catch((error) => {
    console.log(error);
  })
}

const exit = async () => {
  console.log("Exit");
  await axios.get(CONSTANTS.endpoint + "/exitGame").catch((error) => {
    console.log(error);
  })
  router.replace("/");
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/rules">Rules</RouterLink>
      <RouterLink to="/gameSettings">New Game</RouterLink>
      <RouterLink to="/game">Game</RouterLink>

      <!-- Dropdown für Game Options, sichtbar nur auf /game Route -->
      <div v-if="route.path === '/game'" class="dropdown">
        <a class="router-link-exact-active dropbtn">Game Options</a>
        <div class="dropdown-content">
          <a href="#" @click="undo()">Undo</a>
          <a href="#" @click="redo()">Redo</a>
          <a href="#" @click="exit()">Exit</a>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 18px;
  text-align: left;
  margin-top: 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.dropbtn {
  padding: 0 1rem;
  text-decoration: none;
  color: var(--color-text);
  cursor: pointer;
  background-color: transparent;
  border: none;
}

/* Container für die Dropdown-Elemente */
.dropdown {
  display: inline-block;
  position: relative;
}

/* Versteckter Inhalt der Dropdown-Elemente */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Stil für die Links innerhalb des Dropdowns */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Ändert die Farbe der Links beim Hover */
.dropdown-content a:hover {
  background-color: #f1f1f1
}

/* Zeigt den Dropdown-Inhalt beim Hover über den Button */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Anpassungen für den Hover-Stil des Dropdown-Buttons */
.dropdown:hover .dropbtn {
  background-color: transparent;
}

</style>
