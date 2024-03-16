import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  plugins: [Vue()],
});
