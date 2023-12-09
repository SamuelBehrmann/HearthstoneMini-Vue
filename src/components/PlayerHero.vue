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
    <img :style="{height: height}" draggable="false" src="@/assets/images/content/medivh.gif" alt="">
</template>
  
<style scoped>
.img {
    width: auto;
}
</style>