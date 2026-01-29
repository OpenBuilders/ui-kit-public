/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

function injectCssImport(): Plugin {
  return {
    name: "inject-css-import",
    generateBundle(outputOptions, bundle) {
      const format = outputOptions.format;
      Object.values(bundle).forEach((chunk) => {
        if (chunk.type !== "chunk" || !chunk.isEntry) return;
        if (format === "es") {
          chunk.code = 'import "./index.css";\n' + chunk.code;
        } else if (format === "cjs") {
          chunk.code = 'require("./index.css");\n' + chunk.code;
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), dts(), injectCssImport()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "UiKitPublic",
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@types": path.resolve(__dirname, "./src/types"),
    },
  },
});
