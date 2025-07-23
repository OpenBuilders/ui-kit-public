import React from "react";
import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/styles/index.scss";

const withThemeBackground = (Story: React.ComponentType) => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-background-base)",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
        notcoin: "notcoin",
        hodl: "hodl",
      },
      defaultTheme: "light",
      attributeName: "theme-mode",
    }),
    withThemeBackground,
  ],
};

export default preview;
