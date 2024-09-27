<template>
  <div>
    <h2>User Section: View Polygons</h2>
    <div v-if="imageUrl" class="image-container">
      <img :src="imageUrl" ref="imageRef" alt="Uploaded Image" @load="initializeCanvas" />
      <canvas ref="canvasRef" class="canvas" @click="checkPolygonClick"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const imageRef = ref(null);
const canvasRef = ref(null);
const imageUrl = ref(null);
const polygons = reactive([]);

function initializeCanvas() {
  const canvas = canvasRef.value;
  const image = imageRef.value;

  if (canvas && image) {
    canvas.width = image.clientWidth;
    canvas.height = image.clientHeight;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPolygons(ctx);
  }
}

function drawPolygons(ctx) {
  polygons.forEach(polygon => {
    ctx.beginPath();
    ctx.moveTo(polygon.points[0].x, polygon.points[0].y);
    polygon.points.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();
    ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
    ctx.fill();
  });
}

function checkPolygonClick(event) {
  const clickX = event.offsetX;
  const clickY = event.offsetY;

  polygons.forEach(polygon => {
    const insidePolygon = isPointInPolygon(polygon.points, { x: clickX, y: clickY });
    if (insidePolygon) {
      alert(`Polygon Name: ${polygon.name}`);
    }
  });
}

function isPointInPolygon(points, point) {
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const xi = points[i].x, yi = points[i].y;
    const xj = points[j].x, yj = points[j].y;
    const intersect = ((yi > point.y) !== (yj > point.y)) &&
                      (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

onMounted(() => {
  const storedPolygons = localStorage.getItem('polygons');
  const storedImage = localStorage.getItem('uploadedImage');
  if (storedPolygons) {
    polygons.push(...JSON.parse(storedPolygons));
  }
  if (storedImage) {
    imageUrl.value = storedImage;
  }
});
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}

img {
  max-width: 100%;
}

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: auto;
  border: 1px solid black;
}
</style>
