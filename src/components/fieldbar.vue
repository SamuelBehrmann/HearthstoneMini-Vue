<script setup>
// Get slots from backend
var slots = [

]
</script>

<template>
    <div class="fieldbar">
        
    </div>
</template>


<style>
.fieldbar {
    height: 50%;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    z-index: 0;
    transform: translateX(0.8%);
}

.slot {
    z-index: 1;
    aspect-ratio: 0.66;
    height: 80%;
}

.fieldbar-active {
    align-items: start;
}

.fieldbar-inactive {
    align-items: end;
}
</style>