<script setup>
defineProps({
    gifSrc: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
})
</script>

<template>
    <img class="char" :style="{height: height}" draggable="false" src="@/assets/images/content/medivh.gif" alt="">
</template>
  
<style scoped>
.char {
    width: auto;
}
</style>