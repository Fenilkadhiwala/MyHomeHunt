import React from "react";
import { ThemeIconAdapter } from "../adapter";
import { ThemeIconProps } from "@mantine/core";

export const ThemeIcon: React.FC<ThemeIconProps> = ({ ...props }) => {
  return <ThemeIconAdapter {...props} />;
};
