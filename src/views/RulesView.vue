
<script setup>
const rules = ["Each player starts with the same amount of HP and Mana.",
  "Each round always begins on the same game board.",
  "Each player starts with 5 Cards on his hand and 30 in the deck.",
  "Play cards from your hand to summon a creature.",
  "Attack the enemies creatures or the player directly to deal damage.",
  "Use your mana reserves to play cards.",
  "The mana pool will be increased by one, after every full turn",
  "Victory condition: enemy Healpoints are 0",]

</script>

<template>
  <div id="background"></div>
  <div class="rules">
    <div class="rule" v-for="rule in rules">
      <img class="indicator" src="@/assets/images/rules/indicator.webp" alt="">
      <span>{{ rule }}</span>
    </div>
  </div>
</template>

<style>

#background {
  width: 100vw;
    height: 100vh;
  background-image: url(@/assets/images/rules/background.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: color;
  filter: blur(5px);
  transform: scale(1.1);
  position: fixed;
}

.rules {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 3em 1em;
  gap: 1em 1em;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.indicator {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 5ex;
  width: 5ex;
}

.rule {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1em 1em;
  padding: 1em 1em;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.3);
}

span {
  font-size: 16pt;
  color: white;
}
</style>
