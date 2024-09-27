<template>
  <div>
    <h2>Admin Section: Draw Polygon</h2>
    <input type="file" @change="handleImageUpload" />

    <div v-if="imageUrl" class="image-container">
      <img :src="imageUrl" ref="imageRef" alt="Uploaded Image" @load="initializeCanvas" />
      <canvas ref="canvasRef" class="canvas" 
              @click="addPolygonPoint" 
              @mousemove="previewPolygon" 
              @contextmenu.prevent="submitPolygon"></canvas>
    </div>

    <div v-if="selectedPolygon">
      <input type="text" v-model="selectedPolygon.name" placeholder="Polygon Name" />
      <button @click="savePolygon">Save Polygon</button>
    </div>

    <div v-if="polygons.length">
      <h3>Polygons:</h3>
      <ul>
        <li v-for="(polygon, index) in polygons" :key="index">
          <span @click="editPolygon(index)">{{ polygon.name }}</span>
          <button @click="removePolygon(index)">Remove</button>
        </li>
      </ul>
    </div>

    <!-- Create Shape Name Button -->
    <div v-if="polygons.length > 0" style="margin-top: 20px;">
      <h3>Create Shape Name for Selected Polygon:</h3>
      <input type="text" v-model="shapeName" placeholder="Enter Shape Name" />
      <button @click="updatePolygonName">Update Polygon Name</button>
    </div>

    <nuxt-link to="/games/user2">Go to User Section</nuxt-link>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const imageRef = ref(null);
const canvasRef = ref(null);
const imageUrl = ref(null);
const polygons = reactive([]);
const polygonPoints = ref([]);
const selectedPolygon = reactive({ name: '', points: [] });
const shapeName = ref('');  // To store the new shape name
const currentMousePosition = ref({ x: 0, y: 0 });

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
    localStorage.setItem('uploadedImage', imageUrl.value);  // Save image to local storage
  }
}

function initializeCanvas() {
  const canvas = canvasRef.value;
  const image = imageRef.value;

  if (canvas && image) {
    canvas.width = image.clientWidth;
    canvas.height = image.clientHeight;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redrawPolygons(ctx);
  }
}

function addPolygonPoint(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  polygonPoints.value.push({ x, y });

  const ctx = canvasRef.value.getContext('2d');
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  redrawPolygons(ctx);
}

function previewPolygon(event) {
  currentMousePosition.value = { x: event.offsetX, y: event.offsetY };

  const ctx = canvasRef.value.getContext('2d');
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  redrawPolygons(ctx);
}

function submitPolygon() {
  if (polygonPoints.value.length > 2) {
    selectedPolygon.points = polygonPoints.value;
    selectedPolygon.name = `Polygon ${polygons.length + 1}`;
    polygons.push({ ...selectedPolygon });

    polygonPoints.value = [];
    savePolygonsToLocalStorage();
    initializeCanvas();  // Refresh canvas
  }
}

function savePolygonsToLocalStorage() {
  localStorage.setItem('polygons', JSON.stringify(polygons));
}

function savePolygon() {
  const polygonIndex = polygons.findIndex(p => p.name === selectedPolygon.name);
  if (polygonIndex !== -1) {
    polygons[polygonIndex].name = selectedPolygon.name;
    savePolygonsToLocalStorage();
    initializeCanvas();
  }
}

function editPolygon(index) {
  selectedPolygon.name = polygons[index].name;
  selectedPolygon.points = polygons[index].points;
}

function removePolygon(index) {
  polygons.splice(index, 1);
  savePolygonsToLocalStorage();
  initializeCanvas();  // Refresh canvas after removal
}

function updatePolygonName() {
  const polygonIndex = polygons.findIndex(p => p.name === selectedPolygon.name);
  if (polygonIndex !== -1 && shapeName.value) {
    polygons[polygonIndex].name = shapeName.value;
    shapeName.value = '';  // Clear the input after updating
    savePolygonsToLocalStorage();
    initializeCanvas();  // Refresh the canvas with the updated polygon name
  }
}

function redrawPolygons(ctx) {
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

  // Draw the in-progress polygon with dashed lines
  if (polygonPoints.value.length > 1) {
    ctx.beginPath();
    ctx.moveTo(polygonPoints.value[0].x, polygonPoints.value[0].y);
    polygonPoints.value.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = 'blue';
    ctx.stroke();
  }

  if (polygonPoints.value.length > 0) {
    const lastPoint = polygonPoints.value[polygonPoints.value.length - 1];
    ctx.beginPath();
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(currentMousePosition.value.x, currentMousePosition.value.y);
    ctx.strokeStyle = 'green';
    ctx.setLineDash([5, 5]);
    ctx.stroke();
    ctx.setLineDash([]);
  }
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
