import React from "react";
import { GridColAdapter } from "../adapter";
import { GridColProps } from "@mantine/core";

export const GridCol: React.FC<GridColProps> = ({ ...props }) => {
  return <GridColAdapter {...props} />;
};
