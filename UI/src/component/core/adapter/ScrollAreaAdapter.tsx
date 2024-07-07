import React from "react";
import { ScrollArea, ScrollAreaProps } from "@mantine/core";

export const ScrollAreaAdapter: React.FC<ScrollAreaProps> = ({ ...props }) => {
  return <ScrollArea {...props} />;
};
