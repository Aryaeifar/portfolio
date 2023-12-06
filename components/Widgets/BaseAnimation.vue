import type { Style } from 'nuxt/dist/head/runtime/components';
<script setup="props" lang="ts">
import { useRafFn } from "@vueuse/core";
import { useRouteQuery } from "@vueuse/router";
import { onMounted, ref, watch } from "vue";
import { initCanvas, polar2cart, r15, r90, r180 } from "../utils";
const props = defineProps({
  color: {
    type:String
  }
})
const shot = useRouteQuery("shot");
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

    if (nx < -100 || nx > 1920 || ny < -100 || ny > 919) return;

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

  f.start = () => {
    controls.pause();
    iterations = 0;
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = .3;
    ctx.strokeStyle = props.color;
    prevSteps = [];
    steps =
      // random() < .5 ? [() => step(0, random() * 400, 0), () => step(1920, random() * 919, r180)] : [() => step(random() * 400, 0, r90), () => step(random() * 400, 919, -r90)];
      random() < .5 ? [() => step(0, random() * 919, 0), () => step(random() * 919, 0, r90),() => step(1920, random() * 919, r180)] : [() => step(0, random() * 919, 0),() => step(1920, random() * 919, r180), () => step(random() * 400, 919, -r90)];
      // [
      //   () => step(0, random() * 919, 0), //From left to right
      //   () => step(random() * 919, 0, r90), // From top to bottom
      //   () => step(1920, random() * 919, r180), //From right to left
      //   () => step(random() * 400, 919, -r90), //from bottom to top
      // ]
    controls.resume();
    stopped.value = false;
  };

  f.start();
});
</script>

<template>
  <canvas ref="el" width="1920" height="919"></canvas>
</template>
