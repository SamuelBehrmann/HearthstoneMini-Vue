<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import PlayerHero from '@/components/PlayerHero.vue';
import Fieldbar from '@/components/Fieldbar.vue';
import Hand from '@/components/Hand.vue';
import Deck from '@/components/Deck.vue';
import axios from 'axios';
import CONSTANTS from '../common/constants.js';
import { gameState } from '@/stores/gameState';
// import { watch } from 'vue';
import { storeToRefs } from 'pinia';

/// Variables
const {connected, data} = storeToRefs(gameState());

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

const drawCard = async () => {
  console.log("Draw Card");
  await axios.get(CONSTANTS.endpoint + "/drawCard").catch((error) => {
    console.log(error);
  })

}

const placeCard = async (data) => {
  console.log("Place Card");
  await axios.post(CONSTANTS.endpoint + "/placeCard", {
    "fieldIndex": data.targetIndex,
    "handSlotIndex": data.sourceIndex
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch((error) => {
    console.log(error);
  })
}

const directAttack = async (data) => {
  console.log("Direct Attack");
  await axios.post(CONSTANTS.endpoint + "/direckAttack", {
    "activeFieldIndex": data.sourceIndex
  },{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch((error) => {
    console.log(error);
  })
}

const attack = async (data) => {
  console.log("Attack", data);
  await axios.post(CONSTANTS.endpoint + "/attack", {
    "inactiveFieldIndex": data.targetIndex,
    "activeFieldIndex": data.sourceIndex
  },{
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }).catch((error) => {
    console.log(error);
  })
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
    <div v-if="connected" class="game">
      <!-- TODO: Fix gifsrc  -->
      <Hand class="hand-inactive" :is-active="false" :hand-cards="data.players[1].gamebar.hand" />
      <PlayerHero class="char inactive-char" src="@/assets/images/content/medivh.gif"/>
      <Deck class="deck-inactive" :is-active="false" :size="data.players[1].gamebar.deck.length"
        draggable="false" />
      <Fieldbar class="fieldbar-inactive" :slots="data.players[1].fieldbar.cardarea.row" />

      <Fieldbar class="fieldbar-active" @placeCard="placeCard" @attack="attack" @direckAttack="directAttack" :slots="data.players[0].fieldbar.cardarea.row" />
      <PlayerHero class="char active-char" src="@/assets/images/content/medivh.gif" />
      <Deck class="deck-active" @drawCard="drawCard()" :size="data.players[0].gamebar.deck.length" />
      <Hand class="hand-active" :hand-cards="data.players[0].gamebar.hand" />
    </div>
    <div v-else class="game"></div>
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
  z-index: 100;
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
  z-index: 100;
}

.hand-inactive {
  pointer-events: none;
  position: absolute;
  z-index: 0;
  top: -3%;

}

.fieldbar-active {
  bottom: 35%;
  z-index: 90;
  pointer-events: all;
}

.fieldbar-inactive {
  pointer-events: all;
  top: 28%;
  z-index: 90;
}

.char {
  pointer-events: all;
  position: absolute;
  z-index: 0;
  user-select: none;
  z-index: 95;
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
