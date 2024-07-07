import React from "react";
import { SimpleGridAdapter } from "../adapter";
import { SimpleGridProps } from "@mantine/core";

export const SimpleGrid: React.FC<SimpleGridProps> = ({ ...props }) => {
  return <SimpleGridAdapter {...props} />;
};
