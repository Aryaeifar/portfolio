<script setup>
import {
  useMouse,
  onClickOutside,
  useDraggable,
  useDropZone,
  timestamp,
} from "@vueuse/core";
import { useBluetooth } from "@vueuse/core";

const mousePos = ref(useMouse());
const clickOutsideDiv = ref(HTMLElement | null);
const dragMe = ref(HTMLDivElement | null);
const dropZone = ref(HTMLDivElement | null);
const doSomething = () => {
  console.log("you fucked uppppppp");
};
const { isSupported, isConnected, device, requestDevice, server } =
  useBluetooth({
    acceptAllDevices: true,
  });
onClickOutside(clickOutsideDiv, doSomething);

const { x, y, style } = useDraggable(dragMe, {
  initialValue: { x: 100, y: 50 },
});

const onDrop = () => {
  console.log("You are not fucked up");
};
const { isOverDropZone } = useDropZone(dropZone, {
  onDrop,
});
const firstCanvas = ref(HTMLCanvasElement);
const secCanvas = ref(HTMLCanvasElement);
const breakCanvas = ref(HTMLCanvasElement);

onMounted(() => {
  const canvas = firstCanvas.value;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "red"; //blue

  ctx.beginPath();
  ctx.arc(100, 200, 50, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.lineWidth = 20;
  ctx.strokeStyle = "red";
  ctx.arc(220, 200, 50, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.closePath();

  let window_width = circle_canvas.width;
  let window_height = circle_canvas.height;
  const Canvas_second = secCanvas.value;
  const context = Canvas_second.getContext("2d");

  class Circle {
    constructor(lineWidth, color, xpose, ypose, radius, text, speed) {
      this.lineWidth = lineWidth;
      this.color = color;
      this.xpose = xpose;
      this.ypose = ypose;
      this.radius = radius;
      this.text = text;
      this.speed = speed;
      this.dx = 1 * this.speed;
      this.dy = 1 * this.speed;
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.color;
      ctx.radius = this.radius;
      ctx.textAlign = "center";
      ctx.textBaseLine = "middle";
      ctx.font = "10px arial";
      ctx.fillText(this.text, this.xpose, this.ypose);
      ctx.arc(this.xpose, this.ypose, this.radius, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
    }
    update(ctx) {
      this.draw(ctx);
      this.xpose += this.dx;
      this.ypose += this.dy;
      // x pose
      if (this.xpose + this.radius > window_width) {
        this.dx = -this.dx;
      }
      if (this.xpose - this.radius < 0) {
        this.dx = -this.dx;
      }

      // y pose
      if (this.ypose + this.radius > window_height) {
        this.dy = -this.dy;
      }
      if (this.ypose - this.radius < 0) {
        this.dy = -this.dy;
      }
    }
  }
  let circles = [];
  let random_number = (min, max) => {
    let result = Math.random() * (max - min) - min;
    return result;
  };
  for (let i = 0; i < 10; i++) {
    let radius = 50;
    let random_x = random_number(radius, window_width - radius);
    let random_y = random_number(radius, window_height - radius);
    let my_circle = new Circle(
      1,
      "black",
      100 + random_x,
      100 + random_y,
      radius,
      "A",
      2
    );
    circles.push(my_circle);
  }

  let update_circle = () => {
    requestAnimationFrame(update_circle);
    context.clearRect(0, 0, 400, 400);
    circles.forEach((element) => {
      element.update(context);
    });
  };
  update_circle();

  const break_canvas = breakCanvas.value;
  const ctx_break = break_canvas.getContext("2d");
  const break_canvas_width = break_canvas.width;
  const break_canvas_height = break_canvas.height;
  class object_box {
    constructor(
      width = 0,
      height = 0,
      xpose = 0,
      ypose = 0,
      lineWidth = null,
      color = "red",
      radius = null,
      speed = null
    ) {
      this.width = width;
      this.height = height;
      this.xpose = xpose;
      this.ypose = ypose;
      this.lineWidth = lineWidth;
      this.color = color;
      this.radius = radius;
      this.speed = speed;
      this.dx = 1 * this.speed;
      this.dy = 1 * this.speed;
    }
    create_break(ctx) {
      ctx.rect(this.xpose, this.ypose, this.width, this.height);
      ctx.fillStyle = "orange";
      ctx.fill();
    }
    create_circle(ctx) {
      ctx.fillStyle = this.color; //blue
      ctx.beginPath();
      ctx.arc(this.xpose, this.ypose, this.radius, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.closePath();
    }
    update(ctx) {
      ctx.clearRect(0, 0, break_canvas_width, break_canvas_height);
      this.create_circle(ctx);
      this.xpose += this.dx;
      this.ypose += this.dy;
      if (this.xpose + this.radius > break_canvas_width) {
        this.dx = -this.dx;
      }
      if (this.xpose - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.ypose + this.radius > break_canvas_height) {
        this.dy = -this.dy;
      }
      if (this.ypose + this.radius < 25) {
        this.dy = -this.dy;
      }
    }
  }
  let random_x = break_canvas_width * Math.random();
  let random_y = break_canvas_height * Math.random();

  let my_break_circle = new object_box(
    null,
    null,
    random_x,
    random_y,
    null,
    "blue",
    15,
    5
  );

  my_break_circle.create_circle(ctx_break);
  let update_break_circle = () => {
    requestAnimationFrame(update_break_circle);
    my_break_circle.update(ctx_break);
  };
  update_break_circle();
  let my_break = new object_box(100, 10, 150, break_canvas_height);
  my_break.create_break(ctx_break);
});

// image zone drawer
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
    <div>
      <canvas
        ref="firstCanvas"
        width="400"
        height="400"
        style="background-color: blue"
      ></canvas>
      <canvas
        class="ms-16"
        ref="secCanvas"
        width="400"
        height="400"
        id="circle_canvas"
        style="background-color: green"
      ></canvas>
      <canvas
        class="ms-16"
        ref="breakCanvas"
        width="400"
        height="400"
        id="break_canvas"
        style="background-color: red"
      ></canvas>
    </div>
    <div
      :class="[
        'border rounded-lg pa-3',
        mousePos.y > 160 ? 'text-blue' : 'text-red',
      ]"
    >
      <div>vueUse: useMouse</div>
      {{ mousePos.y }}
    </div>
    <div class="border rounded-lg pa-3 mt-3" ref="clickOutsideDiv">
      <div>vueUse: onClickOutside</div>
      Click outside of me
    </div>
    <div style="position: relative">
      <div
        :style="style"
        ref="dragMe"
        class="border pa-3 mt-3 rounded-lg bg-orange"
        style="position: fixed; cursor: grab"
      >
        <div>vueUse: useDraggable</div>
        Drag me : {{ x }} {{ y }}
      </div>
    </div>
    <div
      ref="dropZone"
      class="border pa-3 mt-3 rounded-lg"
      style="height: 30rem; width: 30rem"
    >
      <div>vueUse: useDropZone</div>
      Drop something
    </div>
    <button class="bg-cyan pa-2 rounded-lg mt-3" @click="requestDevice()">
      Request Bluetooth Device
    </button>
    <div class="border rounded pa-12 mt-12">
      <!-- upload image and creare zone -->
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
    </div>
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
