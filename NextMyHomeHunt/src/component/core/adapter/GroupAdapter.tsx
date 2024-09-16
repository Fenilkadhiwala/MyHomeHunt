import React from "react";
import { Group, GroupProps } from "@mantine/core";

export const GroupAdapter: React.FC<GroupProps> = ({ ...props }) => {
  return <Group {...props} />;
};
