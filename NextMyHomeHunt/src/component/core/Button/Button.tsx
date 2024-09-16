import React from "react";
import { ButtonAdapter, ButtonExtendedProps } from "../adapter/ButtonAdapter";

export const Button: React.FC<ButtonExtendedProps> = ({ ...props }) => {
  return <ButtonAdapter {...props} />;
};
