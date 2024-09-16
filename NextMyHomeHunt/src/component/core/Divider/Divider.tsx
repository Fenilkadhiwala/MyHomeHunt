import React from "react";
import { DividerAdapter } from "../adapter";
import { DividerProps } from "@mantine/core";

export const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return <DividerAdapter {...props} />;
};
