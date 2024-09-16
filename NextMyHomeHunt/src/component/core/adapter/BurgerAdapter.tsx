import React from "react";
import { Burger, BurgerProps } from "@mantine/core";

export const BurgerAdapter: React.FC<BurgerProps> = ({ ...props }) => {
  return <Burger {...props} />;
};
