import React from "react";
import { HoverCardTarget, HoverCardTargetProps } from "@mantine/core";

export interface HoverCardTargetExtendedProps extends HoverCardTargetProps {
  children: React.ReactNode;
}

export const HoverCardTargetAdapter: React.FC<HoverCardTargetExtendedProps> = ({
  children,
  ...props
}) => {
  return <HoverCardTarget {...props}>{children}</HoverCardTarget>;
};
