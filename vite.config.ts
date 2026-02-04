/// <reference types="vitest/config" />
import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const pkg = JSON.parse(
  readFileSync(path.resolve(__dirname, "package.json"), "utf8")
);
const peerDeps = pkg.peerDependencies
  ? Object.keys(pkg.peerDependencies)
  : [];
const external = [
  ...peerDeps,
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
];

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
      external,
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) return "index.css";
          return "[name]-[hash][extname]";
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
