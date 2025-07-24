// src/components/Icon/IconContext.tsx
import React, { ReactNode } from "react";
import { icons as defaultIcons } from "./icons";
import { IconName } from "./types";
import { IconContext } from "./IconContextUtils";

type IconComponentType = React.FC<React.SVGProps<SVGSVGElement>>;
type IconsMap = Record<IconName | string, IconComponentType>;

export const IconProvider = ({
  icons,
  children,
}: {
  icons?: IconsMap;
  children: ReactNode;
}) => (
  <IconContext.Provider value={{ ...defaultIcons, ...icons }}>
    {children}
  </IconContext.Provider>
);
