import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";

export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "src/mocks",
      enable: true,
      watchFiles: true,
      logger: true,
    }),
  ],
});
