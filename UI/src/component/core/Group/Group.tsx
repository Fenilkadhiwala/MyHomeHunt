import React from "react";
import { GroupAdapter } from "../adapter";
import { GroupProps } from "@mantine/core";

export const Group: React.FC<GroupProps> = ({ ...props }) => {
  return <GroupAdapter {...props} />;
};
