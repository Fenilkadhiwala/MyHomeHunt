import React from "react";
import { TextAdapter, TextExtendedProps } from "../adapter/TextAdapter";

export const Text: React.FC<TextExtendedProps> = ({ text, ...props }) => {
  return <TextAdapter text={text} {...props} />;
};
