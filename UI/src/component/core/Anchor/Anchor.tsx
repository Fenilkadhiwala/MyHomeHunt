import React from "react";
import { AnchorAdapter, AnchorExtendedProps } from "../adapter/AnchorAdapter";

export const Anchor: React.FC<AnchorExtendedProps> = ({
  children,
  ...props
}) => {
  return <AnchorAdapter {...props}>{children}</AnchorAdapter>;
};
