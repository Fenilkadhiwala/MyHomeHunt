import React from "react";
import { ThemeIcon, ThemeIconProps } from "@mantine/core";

export const ThemeIconAdapter: React.FC<ThemeIconProps> = ({ ...props }) => {
  return <ThemeIcon {...props} />;
};
