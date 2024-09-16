import React from "react";
import { Text, TextProps } from "@mantine/core";

export interface TextExtendedProps extends TextProps {
  text: string;
}
export const TextAdapter: React.FC<TextExtendedProps> = ({
  text,
  ...props
}) => {
  return <Text {...props}>{text}</Text>;
};
