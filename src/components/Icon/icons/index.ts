import { actionIcons } from "./actions";
import { IconName } from "../types";

export const icons: Record<IconName, () => React.ReactElement> = {
  ...actionIcons,
};

export { actionIcons };
