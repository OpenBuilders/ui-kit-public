import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.base = "./";
    if (config.plugins) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin && plugin.name !== "inject-css-import"
      );
    }
    if (config.build) {
      delete config.build.lib;
      if (config.build.rollupOptions) {
        delete config.build.rollupOptions.external;
        const output = config.build.rollupOptions.output;
        if (Array.isArray(output)) {
          output.forEach((item) => {
            if (item && "assetFileNames" in item) {
              delete item.assetFileNames;
            }
          });
        } else if (output && "assetFileNames" in output) {
          delete output.assetFileNames;
        }
      }
    }
    // Добавляем поддержку SCSS модулей
    if (config.css) {
      config.css.modules = {
        localsConvention: "camelCase",
      };
    }
    return config;
  },
};
export default config;
