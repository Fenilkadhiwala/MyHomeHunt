import React from "react";
import { ImageAdapter } from "../adapter/ImageAdapter";
import { ImageProps } from "@mantine/core";

export const Image: React.FC<ImageProps> = ({ ...props }) => {
  return <ImageAdapter {...props} />;
};
