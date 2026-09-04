<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    maxOpacity?: number;
  }>(),
  {
    squareSize: 4,
    gridGap: 6,
    flickerChance: 0.05,
    color: "#6B7280",
    maxOpacity: 0.2,
  }
);

const containerRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const container = containerRef.value;
  if (!canvas || !container) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const parseColor = () => {
    const probe = document.createElement("canvas");
    probe.width = probe.height = 1;
    const probeCtx = probe.getContext("2d");
    if (!probeCtx) return "rgba(107, 114, 128,";
    probeCtx.fillStyle = props.color;
    probeCtx.fillRect(0, 0, 1, 1);
    const [r, g, b] = Array.from(probeCtx.getImageData(0, 0, 1, 1).data);
    return `rgba(${r}, ${g}, ${b},`;
  };

  const colorPrefix = parseColor();
  let cols = 0;
  let rows = 0;
  let squares = new Float32Array(0);
  let dpr = 1;
  let frame = 0;
  let lastTime = 0;
  let inView = true;

  const setup = () => {
    dpr = window.devicePixelRatio || 1;
    const width = container.clientWidth;
    const height = container.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    cols = Math.floor(width / (props.squareSize + props.gridGap));
    rows = Math.floor(height / (props.squareSize + props.gridGap));
    squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
      squares[i] = Math.random() * props.maxOpacity;
    }
  };

  const draw = (time: number) => {
    if (!inView) {
      frame = requestAnimationFrame(draw);
      return;
    }
    const delta = lastTime ? (time - lastTime) / 1000 : 0.016;
    lastTime = time;
    for (let i = 0; i < squares.length; i++) {
      if (Math.random() < props.flickerChance * delta) {
        squares[i] = Math.random() * props.maxOpacity;
      }
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const opacity = squares[i * rows + j];
        ctx.fillStyle = `${colorPrefix}${opacity})`;
        ctx.fillRect(
          i * (props.squareSize + props.gridGap) * dpr,
          j * (props.squareSize + props.gridGap) * dpr,
          props.squareSize * dpr,
          props.squareSize * dpr
        );
      }
    }
    frame = requestAnimationFrame(draw);
  };

  setup();
  frame = requestAnimationFrame(draw);

  const resizeObserver = new ResizeObserver(setup);
  resizeObserver.observe(container);
  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      inView = entry.isIntersecting;
    },
    { threshold: 0 }
  );
  intersectionObserver.observe(canvas);

  onUnmounted(() => {
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersectionObserver.disconnect();
  });
});
</script>

<template>
  <div ref="containerRef" class="blog-flicker">
    <canvas ref="canvasRef" class="blog-flicker-canvas" />
  </div>
</template>
