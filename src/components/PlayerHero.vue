<script setup>
// Define ---------
defineProps({
    src: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
})

// Variables ------
const emit = defineEmits();

// Methods --------
const directAttack = () => {
    emit('directAttack')
}
</script>

<template>
    <img :style="{height: height}" draggable="false" src="@/assets/images/content/medivh.gif" @dragend="directAttack()">
</template>
  
<style scoped>
.img {
    width: auto;
}
</style>