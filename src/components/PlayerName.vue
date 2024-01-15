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
    color: black;
    font-family: 'Fondamento', cursive;
    font-weight: bold;
    text-shadow: 0 0 5px #000;
    font-size: 1.5vw; 
    
}

</style>