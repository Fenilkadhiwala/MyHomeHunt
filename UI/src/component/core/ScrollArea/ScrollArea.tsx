import React from "react";
import { ScrollAreaAdapter } from "../adapter";
import { ScrollAreaProps } from "@mantine/core";

export const ScrollArea: React.FC<ScrollAreaProps> = ({ ...props }) => {
  return <ScrollAreaAdapter {...props} />;
};
