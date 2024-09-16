import React from "react";
import { SimpleGrid, SimpleGridProps } from "@mantine/core";

export const SimpleGridAdapter: React.FC<SimpleGridProps> = ({ ...props }) => {
  return <SimpleGrid {...props} />;
};
