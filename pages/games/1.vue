<script setup>
const imageRef = ref(null);
const canvasRef = ref(null);
const imageUrl = ref(null);
const areas = reactive([]);
const selectedArea = reactive({ name: "", size: 0, coords: null });
const isDrawing = ref(false);
const startX = ref(0);
const startY = ref(0);
const editingIndex = ref(-1);

onMounted(() => {
  const storedAreas = localStorage.getItem("areas");
  const storedImage = localStorage.getItem("uploadedImage");
  if (storedAreas) {
    const parsedAreas = JSON.parse(storedAreas);
    parsedAreas.forEach((area) => areas.push(area));
  }
  if (storedImage) {
    imageUrl.value = storedImage;
  }
});

function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    areas.splice(0, areas.length);
    localStorage.removeItem("areas");
    imageUrl.value = URL.createObjectURL(file);
    localStorage.setItem("uploadedImage", imageUrl.value);
    resetSelectedArea();
  }
}

function initializeCanvas() {
  const canvas = canvasRef.value;
  const image = imageRef.value;

  if (canvas && image) {
    canvas.width = image.clientWidth;
    canvas.height = image.clientHeight;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    redrawAreas(ctx);
  }
}

function startDrawing(event) {
  isDrawing.value = true;
  startX.value = event.offsetX;
  startY.value = event.offsetY;
}

function drawSquare(event) {
  if (!isDrawing.value) return;

  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  initializeCanvas();

  const currentX = event.offsetX;
  const currentY = event.offsetY;
  const size = Math.abs(currentX - startX.value);
  const xPos = Math.min(currentX, startX.value);
  const yPos = Math.min(currentY, startY.value);

  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.strokeRect(xPos, yPos, size, size);
}

function endDrawing(event) {
  isDrawing.value = false;

  const currentX = event.offsetX;
  const currentY = event.offsetY;
  const size = Math.abs(currentX - startX.value);
  const xPos = Math.min(currentX, startX.value);
  const yPos = Math.min(currentY, startY.value);

  if (editingIndex.value === -1) {
    const newArea = {
      name: `Area ${areas.length + 1}`,
      size,
      coords: { x: xPos, y: yPos, size },
    };
    areas.push(newArea);
  } else {
    areas[editingIndex.value].coords = { x: xPos, y: yPos, size };
  }

  saveAreasToLocalStorage();
  redrawCanvas();
}

function saveAreasToLocalStorage() {
  localStorage.setItem("areas", JSON.stringify(areas));
}

function selectArea(index) {
  const area = areas[index];
  selectedArea.name = area.name;
  selectedArea.size = area.size;
  selectedArea.coords = area.coords;
  editingIndex.value = index;
}

function submitArea() {
  if (editingIndex.value !== -1) {
    areas[editingIndex.value].name = selectedArea.name;
    saveAreasToLocalStorage();
    resetSelectedArea();
    redrawCanvas();
  }
}

function removeArea(index) {
  areas.splice(index, 1);
  saveAreasToLocalStorage();
  redrawCanvas();
  resetSelectedArea();
}

function resetSelectedArea() {
  selectedArea.name = "";
  selectedArea.size = 0;
  selectedArea.coords = null;
  editingIndex.value = -1;
}

function redrawCanvas() {
  const canvas = canvasRef.value;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  initializeCanvas();
  redrawAreas(ctx);
}

function redrawAreas(ctx) {
  areas.forEach((area) => {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.strokeRect(
      area.coords.x,
      area.coords.y,
      area.coords.size,
      area.coords.size
    );
  });
}
</script>
<template>
        <div>
        <h2>Admin Section</h2>
        <input type="file" @change="handleImageUpload" />

        <div v-if="imageUrl" class="image-container">
          <img
            :src="imageUrl"
            ref="imageRef"
            alt="Uploaded Image"
            @load="initializeCanvas"
          />
          <canvas
            ref="canvasRef"
            class="canvas"
            @mousedown="startDrawing"
            @mouseup="endDrawing"
            @mousemove="drawSquare"
          ></canvas>
        </div>

        <div v-if="selectedArea.size > 0">
          <input
            type="text"
            v-model="selectedArea.name"
            placeholder="Area Name"
          />
          <input
            type="number"
            v-model="selectedArea.size"
            placeholder="Area Size"
            readonly
          />
          <button @click="submitArea">Submit Area</button>
        </div>

        <div v-if="areas.length">
          <h3>Areas:</h3>
          <ul>
            <li v-for="(area, index) in areas" :key="index">
              <span @click="selectArea(index)"
                >{{ area.name }} ({{ area.size }}px)</span
              >
              <button @click="removeArea(index)">Remove</button>
            </li>
          </ul>
        </div>

        <nuxt-link to="/games/user">Go to User Section</nuxt-link>
      </div>
</template>
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