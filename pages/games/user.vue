<template>
  <div>
    <h2>User Section</h2>
    <div v-if="imageUrl">
      <h3>Clickable Areas:</h3>
      <div class="image-container">
        <img :src="imageUrl" alt="Uploaded Image" ref="userImageRef" />
        <canvas ref="userCanvasRef" class="user-canvas" @click="handleUserClick"></canvas>
      </div>
      <p v-if="selectedUserArea">{{ selectedUserArea }}</p>
    </div>
    <nuxt-link to="/games">Go back to Admin Section</nuxt-link>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

const userCanvasRef = ref(null);
const userImageRef = ref(null);
const imageUrl = ref(null);
const areas = ref([]);
const selectedUserArea = ref('');

onMounted(() => {
  const storedImage = localStorage.getItem('uploadedImage');
  const storedAreas = localStorage.getItem('areas');

  if (storedImage) {
    imageUrl.value = storedImage;
  }

  if (storedAreas) {
    areas.value = JSON.parse(storedAreas);
  }

  nextTick(() => {
    drawAreas();
  });
});

function drawAreas() {
  const canvas = userCanvasRef.value;
  const ctx = canvas.getContext('2d');

  const img = userImageRef.value;
  if (img) {
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;

    areas.value.forEach(area => {
      const { x, y, size } = area.coords;
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, size, size);
    });
  }
}

function handleUserClick(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  for (const area of areas.value) {
    const { x: areaX, y: areaY, size } = area.coords;
    if (x >= areaX && x <= areaX + size && y >= areaY && y <= areaY + size) {
      // Alert both the area name and size
      alert(`Area Name: ${area.name}, Size: ${area.size}px`);  
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.image-container {
  position: relative;
  display: inline-block;
}

img {
  max-width: 100%;
}

.user-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  pointer-events: auto;
}
</style>
