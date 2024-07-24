import React from "react";
import { BurgerAdapter } from "../adapter";
import { BurgerProps } from "@mantine/core";

export const Burger: React.FC<BurgerProps> = ({ ...props }) => {
  return <BurgerAdapter {...props} />;
};
