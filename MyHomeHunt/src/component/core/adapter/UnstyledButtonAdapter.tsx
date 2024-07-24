import React from "react";
import { UnstyledButton, UnstyledButtonProps } from "@mantine/core";

export interface UnstyledButtonExtendedProps extends UnstyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const UnstyledButtonAdapter: React.FC<UnstyledButtonExtendedProps> = ({
  children,
  ...props
}) => {
  return <UnstyledButton {...props}>{children}</UnstyledButton>;
};
