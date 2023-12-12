<script setup>
import { ref } from 'vue'
import HearthstoneButton from '@/components/HearthstoneButton.vue'
import axios from 'axios'
import CONSTANTS from '@/common/constants.js'
import router from '@/router'


const playerName1 = ref('')
const playerName2 = ref('')
const selectedGameMode = ref('1')

const submitModes = () => {
  console.log('Spieler 1:', playerName1.value)
  console.log('Spieler 2:', playerName2.value)
  console.log('Ausgewählter Spielmodus:', selectedGameMode.value)

  axios.post(CONSTANTS.endpoint + '/initGame',
    {
      'playerName1': playerName1.value,
      'playerName2': playerName2.value,
      'gamemode': selectedGameMode.value
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

  // eslint-disable-next-line no-undef
  router.push('/game')
}
</script>

<template>
  <div class="gameMode-body body">
    <div class="bg-image" id="bg-image"></div>
    <form class="content" @submit.prevent="submitModes">
      <div class="header">
        <h1>Welcome to HearthstoneMini</h1>
      </div>
      <div id="names">
        <div class="player">
          <span>Player 1:</span>
          <input
            class="input hs-border silver"
            type="text"
            id="playerName1"
            name="playerName1"
            v-model="playerName1">
        </div>
        <div class="player">
          <span>Player 2:</span>
          <input
            class="input hs-border silver"
            type="text"
            id="playerName2"
            name="playerName2"
            v-model="playerName2">
        </div>
      </div>
      <div class="modes">
        <label>
          <span>Normal:</span>
          <input class="radio" type="radio" id="normal" name="gameMode" value="1" v-model="selectedGameMode">
          <img src="../assets/images/rules/indicator.webp" alt="" class="indicator">
        </label>
        <label>
          <span>Hardcore:</span>
          <input class="radio" type="radio" id="hardcore" name="gameMode" value="2" v-model="selectedGameMode">
          <img src="../assets/images/rules/indicator.webp" alt="" class="indicator">
        </label>
        <label>
          <span>Debug:</span>
          <input class="radio" type="radio" id="debug" name="gameMode" value="3" v-model="selectedGameMode">
          <img src="../assets/images/rules/indicator.webp" alt="" class="indicator">
        </label>
      </div>
      <HearthstoneButton label="Start" variant="silver" @hearthstone-button-clicked="submitModes" class="classic" />
    </form>
  </div>
</template>

<style scoped>
.gameMode-body {
  inset: 0;
  font-family: 'Fondamento', cursive;
  margin: 0;

  #bg-image {
    background-image: url("../assets/images/Menu.jpeg");
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.1);
    background-blend-mode: color;
    filter: blur(4px);
    transform: scale(1.1);
    position: fixed;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
  }

  span {
    font-size: 18pt;
  }

  .header {
    text-align: center;
    margin-top: 4vh;
    font-size: 2em;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    gap: 2em;
    z-index: 10;
    height: 80%;
  }

  /* Mobile-Anpassungen */
  @media only screen and (max-device-width: 768px) {
    #names {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      gap: 3em;
    }
  }

  @media only screen and (min-device-width: 768px) {
    #names {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: center;
      gap: 3em;
    }
  }

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .input {
    width: 25vw;
  }

  .modes {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2em;

    [type=radio] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    [type=radio]:checked + img {
      filter: hue-rotate(90deg);
    }

    .radio {
      background-image: url("../assets/images/rules/indicator.webp");
    }

    label {
      width: 95px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .indicator {
      height: 2em;
      width: 2em;
    }
  }
}
</style>
