import React, { useEffect } from "react";

type ThemeName = "light" | "dark";

interface ThemeProviderProps {
  theme?: ThemeName;
  children: React.ReactNode;
}

const webApp = window?.Telegram?.WebApp;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    const root = document.documentElement;

    let appliedTheme: ThemeName;

    const tgScheme = theme || webApp?.colorScheme;
    if (tgScheme === "light" || tgScheme === "dark") {
      appliedTheme = tgScheme;
    } else {
      appliedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    root.setAttribute("theme-mode", appliedTheme);
  }, [theme]);

  return <>{children}</>;
};
