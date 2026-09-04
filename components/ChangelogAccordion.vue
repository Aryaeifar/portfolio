<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  features: string[];
  fixes: string[];
}>();

const open = ref({ features: false, fixes: false });

const toggle = (key: "features" | "fixes") => {
  open.value[key] = !open.value[key];
};
</script>

<template>
  <div class="changelog-acc">
    <div
      v-if="features.length"
      class="changelog-acc-item"
      :class="{ 'is-open': open.features }"
    >
      <button
        type="button"
        class="changelog-acc-trigger"
        :aria-expanded="open.features"
        @click="toggle('features')"
      >
        <span class="changelog-acc-label">
          <Icon icon="ri:sparkling-2-line" width="16" height="16" />
          {{ $t("changelogFeatures") }}
          <span class="changelog-acc-count">{{ features.length }}</span>
        </span>
        <Icon
          icon="ri:arrow-down-s-line"
          width="18"
          height="18"
          class="changelog-acc-chevron"
        />
      </button>
      <div class="changelog-acc-body">
        <div>
          <ul>
            <li v-for="item in features" :key="item">
              <Icon icon="ri:checkbox-circle-line" width="15" height="15" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      v-if="fixes.length"
      class="changelog-acc-item"
      :class="{ 'is-open': open.fixes }"
    >
      <button
        type="button"
        class="changelog-acc-trigger"
        :aria-expanded="open.fixes"
        @click="toggle('fixes')"
      >
        <span class="changelog-acc-label">
          <Icon icon="ri:bug-line" width="16" height="16" />
          {{ $t("changelogFixes") }}
          <span class="changelog-acc-count">{{ fixes.length }}</span>
        </span>
        <Icon
          icon="ri:arrow-down-s-line"
          width="18"
          height="18"
          class="changelog-acc-chevron"
        />
      </button>
      <div class="changelog-acc-body">
        <div>
          <ul>
            <li v-for="item in fixes" :key="item">
              <Icon icon="ri:check-line" width="15" height="15" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
