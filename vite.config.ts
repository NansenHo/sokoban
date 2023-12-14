import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    exclude: [
      "**/node_modules/**",
      "**/.{git,trunk,idea,vscode}/**",
      "**/dist/**",
      "**/.trunk/**/*.test.{js,ts,jsx,tsx}",
    ],
  },
  build: {
    sourcemap: true,
  },
});
