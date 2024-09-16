import React from "react";
import { BoxAdapter, BoxExtendedProps } from "../adapter/BoxAdapter";

export const Box: React.FC<BoxExtendedProps> = ({ children, ...props }) => {
  return <BoxAdapter {...props}>{children}</BoxAdapter>;
};
