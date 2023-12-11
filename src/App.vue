<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { gameState } from '@/stores/gameState.js'

var state = gameState()

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/rules">Rules</RouterLink>
      <RouterLink to="/gameSettings">New Game</RouterLink>
      <RouterLink to="/game">Game</RouterLink>

    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
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
</style>
