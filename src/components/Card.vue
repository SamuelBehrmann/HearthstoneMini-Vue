<script setup>
defineProps({
    cardId: {
        type: String,
        required: true
    },
})

</script>

<template>
        <img :src='"https://art.hearthstonejson.com/v1/render/latest/deDE/512x/" + cardId + ".png"'>
</template>


<style scoped>
img {
    height: 100%;
}

</style>