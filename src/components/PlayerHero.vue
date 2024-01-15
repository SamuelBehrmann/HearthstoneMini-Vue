<script setup>
// Define ---------
defineProps({
    usr: {
        type: Boolean,
        required: true
    },

})

// Variables ------
const charHeight = "16.1%";

</script>

<template>
    <img v-if="usr" class="playerHero" :style="{height: charHeight}" draggable="false" src="@/assets/images/content/medivh.gif">
    <img v-else="usr" class="playerHero" :style="{height: charHeight}" draggable="false" src="@/assets/images/content/thrall.gif">
</template>

<style scoped>
.img {
    width: auto;
}
</style>