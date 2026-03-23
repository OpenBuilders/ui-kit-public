import type { Data as DotLottieData } from "@lottiefiles/dotlottie-web";

export const localLottieNames = [
  "chain",
  "confetti",
  "lock",
  "money",
  "sandwatch",
  "sneeze",
  "wallet",
] as const;

export type LottieName = (typeof localLottieNames)[number];

const localLottieLoaders: Record<LottieName, () => Promise<{ default: DotLottieData }>> = {
  chain: () => import("./chain.json"),
  confetti: () => import("./confetti.json"),
  lock: () => import("./lock.json"),
  money: () => import("./money.json"),
  sandwatch: () => import("./sandwatch.json"),
  sneeze: () => import("./sneeze.json"),
  wallet: () => import("./wallet.json"),
};

export const loadLocalLottie = async (name: LottieName): Promise<DotLottieData> => {
  const module = await localLottieLoaders[name]();
  return module.default;
};
