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
