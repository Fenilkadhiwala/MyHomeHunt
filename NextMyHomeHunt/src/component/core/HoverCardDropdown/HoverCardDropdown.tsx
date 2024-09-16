import React from "react";
import {
  HoverCardDropDownAdapter,
  HoverCardDropdownExtendedProps,
} from "../adapter/HoverCardDropdownAdapter";

export const HoverCardDropdown: React.FC<HoverCardDropdownExtendedProps> = ({
  children,
  ...props
}) => {
  return <HoverCardDropDownAdapter>{children}</HoverCardDropDownAdapter>;
};
