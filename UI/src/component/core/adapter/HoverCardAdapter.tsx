import React from "react";
import { HoverCard, HoverCardProps } from "@mantine/core";

export const HoverCardAdapter: React.FC<HoverCardProps> = ({ ...props }) => {
  return <HoverCard {...props}></HoverCard>;
};
