import React from "react";
import {
  UnstyledButtonAdapter,
  UnstyledButtonExtendedProps,
} from "../adapter/UnstyledButtonAdapter";

export const UnstyledButton: React.FC<UnstyledButtonExtendedProps> = ({
  children,
  ...props
}) => {
  return <UnstyledButtonAdapter {...props}>{children}</UnstyledButtonAdapter>;
};
