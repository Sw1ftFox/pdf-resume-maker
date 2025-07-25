import { defineConfig } from "vite";

export default defineConfig({
  base: "/tbank-resume/",
  build: {
    rollupOptions: {
      input: "/src/index.html",
    },
  },
});
