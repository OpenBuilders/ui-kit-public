declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        colorScheme?: string;
        HapticFeedback?: {
          impactOccurred: (
            style: "soft" | "medium" | "heavy" | "light"
          ) => void;
          notificationOccurred: (
            style: "success" | "warning" | "error" | "warning"
          ) => void;
        };
      };
    };
  }
}

export {};
