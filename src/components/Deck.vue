<script setup>
defineProps({
    isActive: {
        type: Boolean,
        default: true
    },
})
const emit = defineEmits()

const drawCard = () => {
    emit('drawCard')
}
const deck = []

</script>

<template>
    <div class="deck" @click="drawCard()">
        <img v-if="isActive" src="@/assets/images/Content/cardback.png">
        <img v-else src="@/assets/images/Content/legendcardback.png">
    </div>
</template>

<style scoped>
.deck {
    display: block;
    height: 20%;
    aspect-ratio: 0.66;
    position: absolute;
    right: 4%;
}

img {
    height: 100%;
    width: 100%;
}

</style>