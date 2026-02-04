// src/components/Icon/IconContextUtils.ts
import { createContext, useContext } from "react";
import { icons as defaultIcons } from "./icons";
import { IconName } from "./types";

type IconComponentType = React.FC<React.SVGProps<SVGSVGElement>>;
type IconsMap = Record<IconName | string, IconComponentType>;

export const IconContext = createContext<IconsMap>(defaultIcons);
export const useIcons = () => useContext(IconContext);
