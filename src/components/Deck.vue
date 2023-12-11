<script setup>
defineProps({
    isActive: {
        type: Boolean,
        default: true
    },
    size: {
        type: Number,
        default: 0
    },
})
const emit = defineEmits()

const drawCard = () => {
    emit('drawCard')
}
const deck = []

</script>

<template>
    <div class="deck" draggable="false" @click="drawCard()" :style="{pointerEvents: isActive ? 'all': 'none'}">
        <img v-if="isActive" src="@/assets/images/Content/cardback.png"  draggable="false">
        <img v-else src="@/assets/images/Content/legendcardback.png"  draggable="false">
        <span  draggable="false">{{ size }}</span>
    </div>
</template>

<style scoped>
.deck {
    display: block;
    height: 20%;
    aspect-ratio: 0.66;
    position: absolute;
    right: 4%;
    user-select: none;
}

span {
    display: block;
    position: absolute;
    right: 17%;
    top: 9%;
    text-align: right;
    font-family: 'Arial Black', serif;
    font-weight: lighter;
    color: whitesmoke;
    -webkit-text-stroke: 1px black;
    font-size: 20px;
    user-select: none;
}

img {
    height: 100%;
    width: 100%;
    user-select: none;
}

</style>