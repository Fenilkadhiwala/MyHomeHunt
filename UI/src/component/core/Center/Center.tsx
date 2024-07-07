import React from "react";
import { CenterAdapter } from "../adapter";
import { CenterProps } from "@mantine/core";

export const Center: React.FC<CenterProps> = ({ ...props }) => {
  return <CenterAdapter {...props} />;
};
