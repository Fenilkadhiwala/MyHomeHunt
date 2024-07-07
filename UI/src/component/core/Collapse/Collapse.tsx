import React from "react";
import { CollapseAdapter } from "../adapter";
import { CollapseProps } from "@mantine/core";

export const Collapse: React.FC<CollapseProps> = ({ ...props }) => {
  return <CollapseAdapter {...props} />;
};
