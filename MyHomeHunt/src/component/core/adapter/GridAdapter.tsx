import React from "react";
import { Grid, GridProps } from "@mantine/core";

export const GridAdapter: React.FC<GridProps> = ({ ...props }) => {
  return <Grid {...props} />;
};
