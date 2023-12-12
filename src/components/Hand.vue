<script setup>
import { useDraggedStore } from '@/stores/dragged';
import Card from './Card.vue'

// definitions ----
defineProps({
  isActive: {
    type: Boolean,
    default: true
  },
  handCards: {
    type: Array,
    default: []
  }
})

// variables ------

const  draggedStore = useDraggedStore()

// methods --------
const setData = (event) => {
  event.dataTransfer.setData("text/plain", event.target.getAttribute('aria-valuenow'));
  draggedStore.dragged = event.target
}

</script>

<template>
  <div class="hand" :style="{ height: isActive ? '23%' : '18%' }">
    <div v-for="(card, i) in handCards" :key="i" class="card" @dragstart="setData" :aria-valuenow="i" draggable="true"
      :style="{ pointerEvents: isActive ? 'all' : 'none' }">
      <div class="card-face">
        <Card v-if="isActive" :card-id="card.card.id" />
        <img v-else src="@/assets/images/Content/legendcardback.png" alt="" :style="{ scale: 0.8 }">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  height: 100%;

}

.hand {
  height: 18%;
  width: 100%;
  display: flex;
  justify-content: center;
  // transform: perspective(50em) rotateX(-60deg) translateY(-20%) translateX(-1.2%);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  right: 0;
}

$total: 5;

@for $i from 0 through ($total - 1) {
  $hue: (
    $i / $total) * -360;
  $rotationRange: 40;
  $rotation: (
    $i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
  $offsetRange: 10%;
  $offset: abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange
  );

.card:nth-child(#{$i + 1}) {
  .card-face {
    transform: translateY($offset * 1) rotate($rotation * 0.5deg);
  }

  &:hover {
    cursor: pointer;

    .card-face {
      transform: translateY(-100px) rotate(0deg) scale(2);
      transition-duration: 0ms;
      z-index: 5;

      &:after {
        animation: fade 250ms ease-out forwards;
      }
    }

    &:after {
      top: -175px;
    }
  }
}
}

.card {
  height: 100%;
  aspect-ratio: 0.66;
  content: '';
  border-radius: 8px;
  margin-right: -4%;
  box-sizing: border-box;
  position: relative;
  border: none;
  background-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:after {
    z-index: 10;
    bottom: 0;
    content: '';
    left: -60px;
    position: absolute;
    right: -60px;
    top: 0px;
  }
}

.card-face {
  pointer-events: none;
  bottom: 0;
  left: 0;
  position: absolute;
  border: none;
  right: 0;
  top: 0;
  transition: 800ms cubic-bezier(0.19, 1, 0.22, 1) transform;

  &:after {
    animation: none;
    background: #fff;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    border: none;
    right: 0;
    top: 0;
  }
}

@keyframes fade {
  0% {
    opacity: 0.9;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.15);
  }
}
</style>