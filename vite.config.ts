/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

const resolvePath = (dir: string) => resolve(import.meta.dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
    },
  },
  test: {
    include: ["./src/__test__/**.{ts,tsx}"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (packageId) => {
          if (
            packageId.includes("modules/react/") ||
            packageId.includes("modules/react-dom/") ||
            packageId.includes("modules/react-is/") ||
            packageId.includes("modules/prop-types/")
          ) {
            return "react";
          }
        },
      },
    },
  },
});
