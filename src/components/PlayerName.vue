<script setup>
defineProps({
    name: {
        type: String,
        required: true
    },

})

</script>

<template>
        <span> {{ name.toUpperCase() }} </span>
</template>


<style scoped>

span {
    font-size: 1.3rem;
    color: black;
    font-family: 'Fondamento', cursive;

}

</style>