import React from "react";
import { Button, ButtonProps } from "@mantine/core";

export interface ButtonExtendedProps extends ButtonProps {
  onClick?: () => void;
}

export const ButtonAdapter: React.FC<ButtonExtendedProps> = ({ ...props }) => {
  return <Button {...props} />;
};
