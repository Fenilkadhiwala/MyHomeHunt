import React from "react";
import { ButtonProps } from "@mantine/core";
import { ButtonAdapter } from "../adapter";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <ButtonAdapter {...props} />;
};
