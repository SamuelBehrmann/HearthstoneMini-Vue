<script setup>
defineProps({
    total: {
        type: Number,
        required: true,
        default: 0
    },
    current: {
        type: Number,
        required: true,
        default: 0
    },
})

</script>

<template>
    <div class="sizedbox">
        <div class="flex-box">
            <span> {{ current }} / {{ total }} </span>
        </div>
    </div>
</template>


<style scoped>
span {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 0 5px #000;
    font-size: 0.8vw; 
}

.flex-box {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.sizedbox {
    position: absolute;
    width: 5%; 
    height: 5%; 
}


</style>