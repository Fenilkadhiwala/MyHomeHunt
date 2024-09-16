import React from "react";
import { GridCol, GridColProps } from "@mantine/core";

export const GridColAdapter: React.FC<GridColProps> = ({ ...props }) => {
  return <GridCol {...props} />;
};
