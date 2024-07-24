import React from "react";
import { HoverCardAdapter } from "../adapter";
import { HoverCardProps } from "@mantine/core";

export const HoverCard: React.FC<HoverCardProps> = ({ ...props }) => {
  return <HoverCardAdapter {...props} />;
};
