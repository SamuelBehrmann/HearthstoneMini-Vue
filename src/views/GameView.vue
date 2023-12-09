<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import PlayerHero from '@/components/PlayerHero.vue';

/// Variables

/// Methods
const calculateSize = () => {
  var gameAspectRatio = 1.4347202296;
  var screenAR = window.innerWidth / window.innerHeight;
  if (screenAR > gameAspectRatio) {
    return {
      width: window.innerHeight * gameAspectRatio + "px",
      height: window.innerHeight + "px"
    }
  } else {
    return {
      width: window.innerWidth + "px",
      height: window.innerWidth / gameAspectRatio + "px",
    }
  }
}

const resizeHandler = () => {
  var newSize = calculateSize();
  var game = document.getElementsByClassName("game")[0];

  game.style.height = newSize.height;
  game.style.width = newSize.width;
}

/// Listener
onMounted(() => {
  resizeHandler();
  window.addEventListener('resize', resizeHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler);
});

</script>

<template>
  <div class="center">
    <div class="game">
      <PlayerHero  class="char inactive-char" gifSrc="@/assets/images/content/medivh.gif" height="16.5%"/>
      <PlayerHero  class="char active-char" gifSrc="@/assets/images/content/medivh.gif" height="16.5%"/>
    </div>
  </div>
</template>

<style scoped>
.game {
  background-image: url(@/assets/images/content/background.png);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
  background-position: center;
  position: fixed;
  display: block;
}

.char {
  pointer-events: all;
  position: absolute;
  z-index: 1;
}

.active-char {
  bottom: 15%;
  left: 45.7%;
}

.inactive-char {
  top: 10.5%;
  left: 45.8%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
