<template>
    <div class="health-bar">
      <div class="fill" :style="{ width: fillPercentage + '%' }"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, watchEffect } from 'vue';
  
  const props = defineProps({
    'currentHP': {
        type: Number,
        required: true,
        default: 0
    }, 
     'maxHP': {
        type: Number,
        required: true,
        default: 0
    }
  });
  const fillPercentage = ref(0);
  
  watchEffect(() => {
    fillPercentage.value = (props.currentHP / props.maxHP) * 100;
  });
  </script>
  
  <style scoped>
  .health-bar {
    background-color: #ddd;
    position: absolute;
  }
  
  .fill {
    height: 100%;
    background-color: #4caf50; /* Green color */
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  </style>
  