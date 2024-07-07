import React from "react";
import { Button, ButtonProps } from "@mantine/core";

export const ButtonAdapter: React.FC<ButtonProps> = ({ ...props }) => {
  return <Button {...props} />;
};
