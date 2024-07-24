import React from "react";
import { Drawer, DrawerProps } from "@mantine/core";

export const DrawerAdapter: React.FC<DrawerProps> = ({ ...props }) => {
  return <Drawer {...props} />;
};
