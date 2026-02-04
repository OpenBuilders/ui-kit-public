import { actionIcons } from "./actions";
import { toastIcons } from "./toast";
import { IconName } from "../types";

export const icons: Record<IconName, () => React.ReactElement> = {
  ...actionIcons,
  ...toastIcons,
};

export { actionIcons };
