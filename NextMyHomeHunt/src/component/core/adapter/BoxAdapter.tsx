import React, { MouseEvent, ReactNode, ComponentType } from "react";
import { Box, BoxProps } from "@mantine/core";

export interface BoxExtendedProps extends BoxProps {
  children: ReactNode;
  component?: any;
  onMouseOver?: (event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLDivElement>) => void;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const BoxAdapter: React.FC<BoxExtendedProps> = ({
  children,
  ...props
}) => {
  return <Box {...props}>{children}</Box>;
};
