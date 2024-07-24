import React from "react";
import {
  HoverCardTargetAdapter,
  HoverCardTargetExtendedProps,
} from "../adapter/HoverCardTargetAdapter";

export const HoverCardTarget: React.FC<HoverCardTargetExtendedProps> = ({
  children,
  ...props
}) => {
  return <HoverCardTargetAdapter {...props}>{children}</HoverCardTargetAdapter>;
};
