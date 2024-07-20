<script setup lang="ts">
import { useRafFn } from "@vueuse/core";
import { useRoute } from "vue-router";
import { onMounted, ref, watch } from "vue";
import { initCanvas, polar2cart, r15, r90, r180 } from "../../utils";

const props = defineProps({
  color: {
    type: String,
  },
});

const route = useRoute();
const el = ref<HTMLCanvasElement | null>(null);

const { random } = Math;

const f = {
  start: () => {},
};

const init = ref(5.5);
const len = ref(5.5);
const stopped = ref(false);

watch([init, len], () => f.start());

onMounted(async () => {
  const canvas = el.value!;
  const { ctx } = initCanvas(canvas);
  const { width, height } = canvas;

  let steps: Function[] = [];
  let prevSteps: Function[] = [];

  let iterations = 1;

  const step = (x: number, y: number, rad: number) => {
    const length = random() * len.value;

    const [nx, ny] = polar2cart(x, y, length, rad);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(nx, ny);
    ctx.stroke();

    const rad1 = rad + random() * r15;
    const rad2 = rad - random() * r15;

    if (nx < -100 || nx > width || ny < -100 || ny > height) return;

    if (iterations <= init.value || random() > 0.5) steps.push(() => step(nx, ny, rad1));
    if (iterations <= init.value || random() > 0.5) steps.push(() => step(nx, ny, rad2));
  };

  const frame = () => {
    iterations += 1;
    prevSteps = steps;
    steps = [];

    if (!prevSteps.length) {
      controls.pause();
      stopped.value = true;
    }
    prevSteps.forEach((i) => i());
  };

  const controls = useRafFn(frame, { immediate: false });

  const restartAnimation = () => {
    controls.pause();
    iterations = 0;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = props.color;
    prevSteps = [];
    steps =
      random() < 0.5
        ? [() => step(0, random() * height, 0), () => step(random() * width, 0, r90), () => step(width, random() * height, r180)]
        : [() => step(0, random() * height, 0), () => step(width, random() * height, r180), () => step(random() * width, height, -r90)];

    controls.resume();
    stopped.value = false;
  };

  watch(() => route.path, () => {
    restartAnimation();
  });

  restartAnimation();
});
</script>

<template>
  <canvas ref="el" width="1920" height="919"></canvas>
</template>