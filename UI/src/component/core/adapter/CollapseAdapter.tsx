import React from "react";
import { Collapse, CollapseProps } from "@mantine/core";

export const CollapseAdapter: React.FC<CollapseProps> = ({ ...props }) => {
  return <Collapse {...props} />;
};
