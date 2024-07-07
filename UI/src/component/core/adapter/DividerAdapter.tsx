import React from "react";
import { Divider, DividerProps } from "@mantine/core";

export const DividerAdapter: React.FC<DividerProps> = ({ ...props }) => {
  return <Divider {...props} />;
};
