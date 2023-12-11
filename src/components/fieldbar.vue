<script setup>
// Imports --------
import Card from './Card.vue'

// Define ---------
const emit = defineEmits()


// Variables ------
const cardHeight = "18%";

// Methods --------
const placeCard = () => {
    emit('placeCard')
}

// TODO: Get slots from backend
var slots = [
    "EX1_001",
    "EX1_001",
    "EX1_001",
    "EX1_001",
    "EX1_001",
]

</script>

<template>
    <div class="fieldbar">
        <div v-for="slot in slots" class="slot" @dragend="placeCard()">
            <!-- TODO: read id and card properties from json -->
            <!-- only render when slot is filled -->
            <Card class="card" :card-id="slot" />
        </div>
    </div>
</template>


<style scoped>
.fieldbar {
    user-select: none;
    height: 18%;
    width: 100%;
    pointer-events: all;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: center;
    z-index: 30;
}

.card {
    z-index: 1;
    aspect-ratio: 0.66;
    height: 100%;
}

.slot {
    z-index: 1;
    aspect-ratio: 0.66;
}
</style>