import React from "react";
import { GridAdapter } from "../adapter";
import { GridProps } from "@mantine/core";

export const Grid: React.FC<GridProps> = ({ ...props }) => {
  return <GridAdapter {...props} />;
};
