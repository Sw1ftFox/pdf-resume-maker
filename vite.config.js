import { defineConfig } from "vite";

export default defineConfig({
  base: "/pdf-resume-maker/",
  build: {
    rollupOptions: {
      input: "/src/index.html",
    },
  },
});
