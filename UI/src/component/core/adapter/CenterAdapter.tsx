import React from "react";
import { Center, CenterProps } from "@mantine/core";

export const CenterAdapter: React.FC<CenterProps> = ({ ...props }) => {
  return <Center {...props} />;
};
