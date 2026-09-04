<script setup lang="ts">
const route = useRoute();
const headings = ref<{ id: string; text: string }[]>([]);
const activeId = ref("");

const collect = () => {
  const nodes = document.querySelectorAll(".blog-prose h2[id]");
  headings.value = Array.from(nodes).map((el) => ({
    id: el.id,
    text: el.textContent || "",
  }));
};

const setActive = () => {
  const positions = headings.value.map((heading) => {
    const el = document.getElementById(heading.id);
    return { id: heading.id, top: el ? el.getBoundingClientRect().top : Infinity };
  });
  let active = positions.find((item) => item.top >= -50 && item.top <= 120);
  if (!active) {
    active = positions.filter((item) => item.top < -50).sort((a, b) => b.top - a.top)[0];
  }
  if (active) activeId.value = active.id;
};

const goTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.history.pushState({}, "", `#${id}`);
  window.scrollTo({ top, behavior: "smooth" });
};

const refresh = async () => {
  await nextTick();
  collect();
  setActive();
};

onMounted(() => {
  refresh();
  window.addEventListener("scroll", setActive, { passive: true });
});

watch(() => route.fullPath, refresh);

onUnmounted(() => {
  window.removeEventListener("scroll", setActive);
});
</script>

<template>
  <div v-if="headings.length" class="blog-toc">
    <h4>{{ $t("blogOnThisPage") }}</h4>
    <nav>
      <ul>
        <li v-for="heading in headings" :key="heading.id">
          <button
            type="button"
            :class="{ 'is-active': activeId === heading.id }"
            @click="goTo(heading.id)"
          >
            {{ heading.text }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>
