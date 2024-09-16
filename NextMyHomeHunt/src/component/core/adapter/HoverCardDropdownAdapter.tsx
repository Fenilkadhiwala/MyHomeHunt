import React from "react";
import { HoverCardDropdown, HoverCardDropdownProps } from "@mantine/core";

export interface HoverCardDropdownExtendedProps extends HoverCardDropdownProps {
  children: React.ReactNode;
}

export const HoverCardDropDownAdapter: React.FC<
  HoverCardDropdownExtendedProps
> = ({ children, ...props }) => {
  return <HoverCardDropdown {...props}>{children}</HoverCardDropdown>;
};
