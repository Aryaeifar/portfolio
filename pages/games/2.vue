<template>
  <div>
    <h2 class="mb-3">Admin Section: Draw Polygon</h2>
    <input type="file" @change="handleImageUpload" />
    <button v-if="imageUrl" @click="removeImage" class="remove-image-btn">Remove Image</button>

    <div v-if="imageUrl" class="image-container">
      <img :src="imageUrl" ref="imageRef" alt="Uploaded Image" @load="initializeCanvas" />
      <canvas ref="canvasRef" class="canvas"
              @click="addPolygonPoint"
              @mousemove="previewPolygon"
              @contextmenu.prevent="submitPolygon"></canvas>
    </div>

    <div v-if="editingPolygonIndex !== null">
      <h3>Edit Polygon Name:</h3>
      <input type="text" v-model="selectedPolygonName" placeholder="Polygon Name" />
      <button @click="updatePolygonName">Save Name</button>
    </div>

    <div v-if="polygons.length">
      <h3>Saved Polygons:</h3>
      <ul>
        <li v-for="(polygon, index) in polygons" :key="index">
          <span @click="editPolygon(index)">{{ polygon.name }}</span>
          <button @click="removePolygon(index)">Remove</button>
        </li>
      </ul>
    </div>

    <nuxt-link to="/games/user2">Go to User Section</nuxt-link>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue';

const imageRef = ref(null);
const canvasRef = ref(null);
const imageUrl = ref(null);

const polygons = reactive([]);
const polygonPoints = ref([]);
const currentMousePosition = ref({ x: 0, y: 0 });

const editingPolygonIndex = ref(null);
const selectedPolygonName = ref('');

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
    localStorage.setItem('uploadedImage', imageUrl.value);
    polygons.splice(0, polygons.length);
    polygonPoints.value = [];
    editingPolygonIndex.value = null;
    selectedPolygonName.value = '';
    savePolygonsToLocalStorage();
  }
}

function removeImage() {
  imageUrl.value = null;
  localStorage.removeItem('uploadedImage');
  polygons.splice(0, polygons.length);
  polygonPoints.value = [];
  editingPolygonIndex.value = null;
  selectedPolygonName.value = '';
  savePolygonsToLocalStorage();
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
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
    redrawAllPolygons(ctx);
  }
}

function redrawAllPolygons(ctx) {
  polygons.forEach(polygon => {
    drawPolygonShape(ctx, polygon.points, 'red', 'rgba(255, 0, 0, 0.3)', false);
  });

  if (polygonPoints.value.length > 1) {
    drawPolygonShape(ctx, polygonPoints.value, 'blue', null, false);
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

function drawPolygonShape(ctx, points, strokeStyle, fillStyle, closePath = true) {
  if (points.length === 0) return;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  if (closePath) {
    ctx.closePath();
  }
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
  if (fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.fill();
  }
}

function addPolygonPoint(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  polygonPoints.value.push({ x, y });
  initializeCanvas();
}

function previewPolygon(event) {
  currentMousePosition.value = { x: event.offsetX, y: event.offsetY };
  initializeCanvas();
}

function submitPolygon() {
  if (polygonPoints.value.length > 2) {
    polygons.push({
      name: `Polygon ${polygons.length + 1}`,
      points: [...polygonPoints.value]
    });

    polygonPoints.value = [];
    savePolygonsToLocalStorage();
    initializeCanvas();
  } else {
    alert('A polygon requires at least 3 points. Please add more points or left-click to continue drawing.');
  }
}

function savePolygonsToLocalStorage() {
  localStorage.setItem('polygons', JSON.stringify(polygons));
}

function editPolygon(index) {
  editingPolygonIndex.value = index;
  selectedPolygonName.value = polygons[index].name;
  initializeCanvas();
}

function updatePolygonName() {
  if (editingPolygonIndex.value !== null && selectedPolygonName.value.trim() !== '') {
    polygons[editingPolygonIndex.value].name = selectedPolygonName.value.trim();
    savePolygonsToLocalStorage();
    editingPolygonIndex.value = null;
    selectedPolygonName.value = '';
    initializeCanvas();
  } else if (selectedPolygonName.value.trim() === '') {
    alert('Please enter a name for the polygon.');
  }
}

function removePolygon(index) {
  polygons.splice(index, 1);
  savePolygonsToLocalStorage();
  initializeCanvas();
  if (editingPolygonIndex.value === index) {
    editingPolygonIndex.value = null;
    selectedPolygonName.value = '';
  } else if (editingPolygonIndex.value > index) {
    editingPolygonIndex.value--;
  }
}

onMounted(() => {
  const storedPolygons = localStorage.getItem('polygons');
  const storedImage = localStorage.getItem('uploadedImage');

  if (storedPolygons) {
    polygons.splice(0, polygons.length, ...JSON.parse(storedPolygons));
  }
  if (storedImage) {
    imageUrl.value = storedImage;
  }
});

watch(imageUrl, (newUrl) => {
  if (newUrl) {
  }
});
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
  margin-top: 20px;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  pointer-events: auto;
  border: 1px solid #ccc;
  background-color: transparent;
}

h2, h3 {
  color: #333;
}

input[type="file"] {
  margin-bottom: 15px;
}

.remove-image-btn {
  margin-left: 10px;
  background-color: #dc3545;
}

.remove-image-btn:hover {
  background-color: #c82333;
}

input[type="text"] {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
}

li span {
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
}

li span:hover {
  color: #0056b3;
}

li button {
  background-color: #dc3545;
}

li button:hover {
  background-color: #c82333;
}

a {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
}

a:hover {
  background-color: #218838;
}
</style>