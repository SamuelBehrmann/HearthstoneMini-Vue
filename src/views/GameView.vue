<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import PlayerHero from '@/components/PlayerHero.vue';
import Fieldbar from '@/components/Fieldbar.vue';
import Hand from '@/components/Hand.vue';
import Deck from '@/components/Deck.vue';

/// Variables
const charHeight = "16.1%";


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

const drawCard = () => {
  console.log("Draw Card");
}

const placeCard = () => {
  console.log("Place Card");
}

const directAttack = () => {
  console.log("Direct Attack");
}

// Listener
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
      <!-- TODO: Fix gifsrc  -->
      <Hand class="hand-inactive" :is-active="false" />
      <PlayerHero class="char inactive-char" src="@/assets/images/content/medivh.gif" @directAttack="directAttack()" :height="charHeight" />
      <Deck class="deck-inactive" :is-active="false"/>
      <Fieldbar class="fieldbar-inactive" />
      
      <Fieldbar class="fieldbar-active" @placeCard="placeCard()"/>
      <PlayerHero class="char active-char" src="@/assets/images/content/medivh.gif" :height="charHeight" />
      <Deck class="deck-active" @drawCard="drawCard()"/>
      <Hand class="hand-active" />
    </div>
  </div>
</template>

<style lang="scss">
.game {
  background-image: url(@/assets/images/content/background.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: fixed;
  display: block;
  pointer-events: none;
}

.deck-active {
  pointer-events: all;
  position: absolute;
  bottom: 30%;
  scale: 85%;
}

.deck-inactive {
  pointer-events: none;
  top: 22.6%;
  scale: 75%;
}

.hand-active {
  pointer-events: all;
  position: absolute;
  z-index: 0;
  bottom: -5%;
  transform: translateX(-1.7%);
}

.hand-inactive {
  pointer-events: none;
  position: absolute;
  z-index: 0;
  top: -3%;
  // transform: translateX(-1.7%);
}

.fieldbar-active {
  pointer-events: all;
  bottom: 35%;
}

.fieldbar-inactive {
  pointer-events: none;
  top: 28%;
}

.char {
  pointer-events: all;
  position: absolute;
  z-index: 0;
  user-select: none;
}

.active-char {
  bottom: 15.6%;
  left: 45.8%;
}

.inactive-char {
  top: 10.1%;
  left: 45.9%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
}
</style>
