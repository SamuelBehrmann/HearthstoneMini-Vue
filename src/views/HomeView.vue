<script setup>
import HearthstoneButton from '@/components/HearthstoneButton.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const openGamePage = () => {
  router.push('/game');
}

const openRulesPage = () => {
  router.push('/rules');
}
</script>

<template>
  <main>
    <div class="button-panel">
      <HearthstoneButton @hearthstone-button-clicked="openGamePage()" label="Play" />
      <HearthstoneButton @hearthstone-button-clicked="openRulesPage()" label="Rules" />
    </div>
  </main>
</template>

<style>

main {
  background-image: url(@/assets/images/background.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}


@media (max-device-width: 600px) {
  .button-panel {
    display: flex;
    width: 100vw;
    flex-direction: column;
    gap: 1em 1em;
    justify-content: center;
    align-items: center;
    z-index: 10;
    bottom: 15vh;
    position: fixed;
  }
}

@media  (min-device-width: 600px) {
  .button-panel {
    display: flex;
    width: 100vw;
    flex-direction: row;
    gap: 1em 1em;
    justify-content: center;
    z-index: 10;
    bottom: 15vh;
    position: fixed;
  }
}

</style>
