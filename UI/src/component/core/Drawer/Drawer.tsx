import React from "react";
import { DrawerAdapter } from "../adapter";
import { DrawerProps } from "@mantine/core";

export const Drawer: React.FC<DrawerProps> = ({ ...props }) => {
  return <DrawerAdapter {...props} />;
};
