import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDraggedStore = defineStore('dragged', () => {
  const dragged = ref({})

  return {dragged }
})
