import React, { useEffect } from "react";
import type { Preview } from "@storybook/react-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/styles/index.scss";

const withThemeBackground = (Story: React.ComponentType) => {
  return (
    <div
      style={{
        backgroundColor: "var(--color-background-secondary)",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <Story />
    </div>
  );
};

export const decorators = [
  (Story) => {
    useEffect(() => {
      const style = document.createElement("style");
      style.innerHTML = `
        #storybook-root, .sb-show-main, .docs-story, .sb-main-padded {
          padding: 0 !important;
          margin: 0 !important;
          background: none !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }, []);
    return <Story />;
  },
];

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
      },
      defaultTheme: "light",
      attributeName: "theme-mode",
    }),
    withThemeBackground,
    ...decorators,
  ],
};

export default preview;
