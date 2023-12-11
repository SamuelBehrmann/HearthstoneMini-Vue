<script setup>
// Imports --------
import Card from './Card.vue'
import { useDraggedStore } from '@/stores/dragged';

// Define ---------
const emit = defineEmits()
defineProps({
    slots: {
        type: Array,
        default: []
    },
})

// Variables ------
var draggedStore = useDraggedStore()

// Methods --------
const placeCard = (sourceIndex, targetIndex) => {
    emit('placeCard', {
        sourceIndex: sourceIndex,
        targetIndex: targetIndex
    })
}

const attack = (sourceIndex, targetIndex) => {
    emit('attack', {
        sourceIndex: sourceIndex,
        targetIndex: targetIndex
    })
}

const directAttack = (sourceIndex) => {
    emit('directAttack', {
        sourceIndex: sourceIndex
    });
}

// listeners ------
ondragstart = (event) => {
    draggedStore.dragged = event.target;
    event.dataTransfer.setData("text/plain", event.target.getAttribute('aria-valuenow'));
    var slots = document.getElementsByClassName('slot');
    for (var i = 0; i < slots.length; i++) {
        slots[i].style.border = ' 1px solid black';
    }
}

ondragover = (event) => {
    event.preventDefault();
}

ondragenter = (event) => {
    event.preventDefault();
}

ondrop = (event) => {
    var currentElement = draggedStore.dragged;
    draggedStore.dragged = null;
    var sourceIndex = event.dataTransfer.getData("text/plain")
    var targetIndex = event.target.getAttribute('aria-valuenow')

    if (!sourceIndex || !targetIndex) return;

    var isHandSource = false;
    var isFieldSource = false;
    var isFieldTarget = false;
    var isPlayerTarget = false;

    while (currentElement !== null) {
        if (currentElement.classList && currentElement.classList.contains('hand-active')) {
            isHandSource = true;
            break;
        } else if (currentElement.classList && currentElement.classList.contains('fieldbar')) {
            isFieldSource = true;
        }
        currentElement = currentElement.parentElement;
    }

    currentElement = event.target;
    while (currentElement !== null) {
        if (currentElement.classList && currentElement.classList.contains('fieldbar')) {
            isFieldTarget = true;
            break;
        } else if (currentElement.classList && currentElement.classList.contains('char')) {
            isPlayerTarget = true;
            break;
        }
        currentElement = currentElement.parentElement;
    }

    isHandSource ?
        placeCard(sourceIndex, targetIndex)
        : (isFieldSource && isFieldTarget ?
            attack(sourceIndex, targetIndex)
            : directAttack(sourceIndex));


}

ondragend = (event) => {
    var slots = document.getElementsByClassName('slot');
    for (var i = 0; i < slots.length; i++) {
        slots[i].style.border = 'none';
    }
}

</script>

<template>
    <div class="fieldbar" draggable="false">
        <div v-for="(slot, i) in slots" class="slot" :class="'slot' + i" :style="{ pointerEvents: 'all' }" :aria-valuenow="i" draggable="false">
            <Card v-if="slot.card !== 'none'" :aria-valuenow="i" class="card" :card-id="slot.card.id" draggable="true"/>
        </div>
    </div>
</template>


<style scoped>
.fieldbar {
    user-select: none;
    height: 18%;
    width: 100%;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: center;
    pointer-events: none;
    gap: 1%;
}

.card {
    aspect-ratio: 0.66;
    height: 100%;
}

.slot {
    content: '';
    aspect-ratio: 0.66;
    height: 100%;
    z-index: 10000;
}
</style>