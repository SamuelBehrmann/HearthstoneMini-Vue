<script setup>
// Define ---------
defineProps({
    src: {
        type: String,
        required: true
    },
})

// Variables ------
const charHeight = "16.1%";

</script>

<template>
    <img class="playerHero" :style="{height: charHeight}" draggable="false" src="@/assets/images/content/medivh.gif">
</template>

<style scoped>
.img {
    width: auto;
}
</style>